import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);
  const [statusLoadingId, setStatusLoadingId] = useState(null);

  const fetchAllOrders = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`${backendUrl}/api/orders/admin/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(data.orders || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to fetch orders");
      setLoading(false);
    }

  }, [token]);

  const handleStatus = async (e, orderId) => {
    setStatusLoadingId(orderId);

    try {
      const { data } = await axios.put(
        `${backendUrl}/api/orders/admin/status/${orderId}`,
        { orderStatus: e.target.value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.success) {
        toast.success("Status updated");
        fetchAllOrders();
      }

      setStatusLoadingId(null);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update status");
      setStatusLoadingId(null);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  return (
    <main>
      <h1>Order page</h1>


      <div>
        {loading ? (
          <div className="py-25 text-center text-gray-500">
            <Loading text="Loading orders..." />
          </div>
        ) : orders.length > 0 ? (
          orders.map((order) => {
            const userName =
              order.userId?.name ||
              `${order.address?.firstName || ""} ${order.address?.lastName || ""
              }`;

            const userEmail =
              order.userId?.email || order.address?.emailAddress || "No email";

            return (
              <div
                key={order._id}
                className="my-3 grid grid-cols-1 items-start gap-3 border-2 border-gray-200 p-5 text-xs text-gray-700 sm:grid-cols-[0.5fr_2fr_1fr] sm:text-sm md:my-4 md:p-8 lg:grid-cols-[0.5fr_2.5fr_1fr_0.5fr_1fr]"
              >
                <img
                  className="w-12"
                  src={assets.parcel_icon}
                  alt="parcel icon"
                />

                <div>
                  <p className="mb-2 text-[18px] font-bold text-black">
                    Order ID: {order._id}
                  </p>

                  <div>
                    {order.items.map((item, i) => {
                      const originalPrice = Number(item.price || 0);
                      const discount = Number(item.discount || 0);
                      const discountPrice =
                        originalPrice - (originalPrice * discount) / 100;

                      return (
                        <div key={i} className="py-1">
                          <p className="text-orange-500">
                            {item.name} x {item.quantity}{" "}
                            <span>{item.size}</span>
                            {i !== order.items.length - 1 ? "," : ""}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 text-sm">
                            <span className="font-semibold text-black">
                              {currency}
                              {discountPrice.toFixed(2)}
                            </span>

                            {discount > 0 && (
                              <>
                                <span className="text-gray-500 line-through">
                                  {currency}
                                  {originalPrice.toFixed(2)}
                                </span>

                                <span className="font-bold text-red-500">
                                  {discount}% OFF
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-3 mb-2 rounded bg-gray-50">
                    <p className="text-[18px] font-bold text-black">
                      Customer Details
                    </p>
                    <p>Name: {userName}</p>
                    <p>Email: {userEmail}</p>
                  </div>

                  <div className="mt-3 mb-2 rounded bg-gray-50">
                    <p className="text-base font-semibold text-black">
                      Address:-
                    </p>

                    <p className="font-medium">
                      {order.address?.firstName} {order.address?.lastName}
                    </p>

                    <div>
                      <p>{order.address?.street},</p>
                      <p>
                        {order.address?.city}, {order.address?.state},{" "}
                        {order.address?.country}, {order.address?.zipCode}
                      </p>
                    </div>
                  </div>

                  <p>{order.address?.mobile}</p>
                </div>

                <div>
                  <p className="text-sm sm:text-[15px]">
                    Items: {order.items.length}
                  </p>
                  <p className="mt-3">
                    Method: {order.paymentMethod?.toUpperCase()}
                  </p>
                  <p>Payment: {order.paymentStatus}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>

                <p className="text-sm font-semibold sm:text-[18px]">
                  {currency}
                  {Number(order.totalAmount || 0).toFixed(2)}
                </p>

                <select
                  value={order.orderStatus}
                  disabled={statusLoadingId === order._id}
                  onChange={(e) => handleStatus(e, order._id)}
                  className="border p-2 font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Processing">Processing</option>
                  <option value="Ready for Shipping">
                    Ready for Shipping
                  </option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            );
          })
        ) : (
          <p className="py-10 text-center text-gray-500">No orders found</p>
        )}
      </div>

      {/* <div>
        {orders.map((order) => {
          const userName =
            order.userId?.name ||
            `${order.address?.firstName || ""} ${order.address?.lastName || ""}`;

          const userEmail =
            order.userId?.email || order.address?.emailAddress || "No email";

          return (
            <div
              key={order._id}
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2.5fr_1fr_0.5fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            >
              <img
                className="w-12"
                src={assets.parcel_icon}
                alt="parcel icon"
              />

              <div>
                <p className="mb-2 text-[18px] font-bold text-black">
                  Order ID: {order._id}
                </p>


                <div>
                  {order.items.map((item, i) => {
                    const originalPrice = Number(item.price || 0);
                    const discount = Number(item.discount || 0);

                    const discountPrice =
                      originalPrice - (originalPrice * discount) / 100;

                    return (
                      <div key={i} className="py-1">
                        <p className="text-orange-500">
                          {item.name} x {item.quantity} <span>{item.size}</span>
                          {i !== order.items.length - 1 ? "," : ""}
                        </p>

                        <div className="flex items-center gap-2 text-sm flex-wrap">
                          <span className="font-semibold text-black">
                            {currency}
                            {discountPrice.toFixed(2)}
                          </span>

                          {discount > 0 && (
                            <>
                              <span className="text-gray-500 line-through">
                                {currency}
                                {originalPrice.toFixed(2)}
                              </span>

                              <span className="text-red-500 font-bold">
                                {discount}% OFF
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  {order.items.map((item, i) => (
                    <p className="py-0.5 text-orange-500" key={i}>
                      {item.name} x {item.quantity} <span>{item.size}</span>
                      {i !== order.items.length - 1 ? "," : ""}
                    </p>
                  ))}
                </div>

                <div className="mt-3 mb-2 rounded bg-gray-50">
                  <p className="text-[18px] font-bold text-black">
                    Customer Details
                  </p>
                  <p>Name: {userName}</p>
                  <p>Email: {userEmail}</p>
                </div>

                <div className="mt-3 mb-2 rounded bg-gray-50">
                  <p className="font-semibold text-base text-black">
                    Address:-
                  </p>
                  <p className=" font-medium">
                    {order.address?.firstName + " " + order.address?.lastName}
                  </p>

                  <div>
                    <p>{order.address?.street + ","}</p>
                    <p>
                      {order.address?.city +
                        ", " +
                        order.address?.state +
                        ", " +
                        order.address?.country +
                        ", " +
                        order.address?.zipCode}
                    </p>
                  </div>
                </div>

                <p>{order.address?.mobile}</p>
              </div>

              <div>
                <p className="text-sm sm:text-[15px]">
                  Items: {order.items.length}
                </p>
                <p className="mt-3">
                  Method: {order.paymentMethod?.toUpperCase()}
                </p>
                <p>Payment: {order.paymentStatus}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-sm sm:text-[18px] font-semibold">
                {currency}
                {Number(order.totalAmount || 0).toFixed(2)}
              </p>

              <select
                value={order.orderStatus}
                onChange={(e) => handleStatus(e, order._id)}
                className="p-2 font-semibold border"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Processing">Processing</option>
                <option value="Ready for Shipping">Ready for Shipping</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          );
        })}
      </div> */}
    </main>
  );
};

export default Orders;
