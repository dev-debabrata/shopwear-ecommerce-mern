import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Button from "./Button";
import AddressModal, { emptyAddress } from "./AddressModel";
import {
    getMyAddresses,
    createAddress,
} from "../services/addressService";

const CheckoutAddress = ({ formData, setFormData }) => {
    const [addresses, setAddresses] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [newAddress, setNewAddress] = useState(emptyAddress);

    const fetchAddresses = async () => {
        try {
            const data = await getMyAddresses();
            setAddresses(data.addresses || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    const handleSelectAddress = (address) => {
        setFormData({
            firstName: address.firstName || "",
            lastName: address.lastName || "",
            emailAddress: address.emailAddress || "",
            street: address.street || "",
            city: address.city || "",
            state: address.state || "",
            zipCode: address.zipCode || "",
            country: address.country || "",
            mobile: address.mobile || "",
        });
    };

    const handleSaveNewAddress = async (e) => {
        e.preventDefault();

        try {
            const data = await createAddress(newAddress);

            setAddresses((prev) => [data.address, ...prev]);
            setFormData(data.address);

            toast.success("Address saved successfully");

            setNewAddress(emptyAddress);
            setShowAddressForm(false);
        } catch (error) {
            toast.error(error?.response?.data?.message || "Address save failed");
        }
    };

    const visibleAddresses = showAll ? addresses : addresses.slice(0, 2);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-medium">Select Address</h3>

                <Button
                    type="primary"
                    size="small"
                    className="rounded px-4"
                    onClick={() => setShowAddressForm(true)}
                >
                    New Address
                </Button>
            </div>

            {addresses.length === 0 ? (
                <p className="text-sm text-gray-500">No saved address found.</p>
            ) : (
                <div className="space-y-3">
                    {visibleAddresses.map((address) => (
                        <label
                            key={address._id}
                            className="flex gap-3 rounded border border-gray-200 p-3 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="checkoutAddress"
                                checked={formData?._id === address._id}
                                onChange={() => handleSelectAddress(address)}
                            />

                            <div>
                                <p className="font-medium">
                                    {address.firstName} {address.lastName}
                                </p>

                                <p className="text-sm text-gray-600">{address.mobile}</p>

                                <p className="text-sm text-gray-600">
                                    {address.street}, {address.city}, {address.state},{" "}
                                    {address.country} - {address.zipCode}
                                </p>
                            </div>
                        </label>
                    ))}

                    {addresses.length > 2 && (
                        <button
                            type="button"
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm text-blue-600 cursor-pointer"
                        >
                            {showAll ? "See less" : "See more"}
                        </button>
                    )}
                </div>
            )}

            {showAddressForm && (
                <AddressModal
                    formData={newAddress}
                    setFormData={setNewAddress}
                    onClose={() => setShowAddressForm(false)}
                    onSave={handleSaveNewAddress}
                    editingIndex={null}
                />
            )}
        </div>
    );
};

export default CheckoutAddress;