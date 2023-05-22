import React, { FC, useState } from "react";

const SupplyChainItemForm: FC = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: "",
        color: "",
        location: "",
        owner: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <h2>Create a New Supply Chain Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" name="id" onChange={handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" onChange={handleChange} />
                </label>
                <label>
                    Color:
                    <input type="text" name="color" onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" onChange={handleChange} />
                </label>
                <label>
                    Owner:
                    <input type="text" name="owner" onChange={handleChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default SupplyChainItemForm;
