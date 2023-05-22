import { FC } from "react";
import useForm from "../../../hooks/useForm";
import TextField from "../../../components/form/textField";

const AddItem: FC = () => {
    const initialValues = {
        name: "",
        price: "",
        color: "",
        location: "",
        owner: "",
    };

    const [formValues, { handleChange, handleSubmit }] = useForm(initialValues);

    const addItem = async () => {
        try {
            console.log(formValues);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>
            <h2>Create a new item</h2>
            <form onSubmit={handleSubmit(addItem)} autoComplete="off">
                <TextField
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Price"
                    name="price"
                    value={formValues.price}
                    onChange={handleChange}
                />
                <TextField
                    label="Color"
                    name="color"
                    value={formValues.color}
                    onChange={handleChange}
                />
                <TextField
                    label="Location"
                    name="location"
                    value={formValues.location}
                    onChange={handleChange}
                />
                <TextField
                    label="Owner"
                    name="owner"
                    value={formValues.owner}
                    onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default AddItem;
