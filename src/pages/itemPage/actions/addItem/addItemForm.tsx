import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import TextField from "../../../../components/form/textField";
import BackBtn from "../../../../components/form/button/backBtn";
import { validateItem } from "../../../../validation/validateItem";
import SubmitBtn from "../../../../components/form/button/submitBtn";
import { useInterfacesContext } from "../../../../hooks/useInterface";

const AddItemForm: FC = () => {
    const { newItem } = useInterfacesContext();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const initialValues = {
        id: newItem.id || "",
        name: newItem.name || "",
        price: newItem.price || "",
        color: newItem.color || "",
        location: newItem.location || "",
        owner: newItem.owner || "",
    };

    const [formValues, { handleChange, handleSubmit }, formErrors] = useForm(
        initialValues,
        validateItem
    );

    const addItemForm = async () => {
        try {
            console.log(formValues);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="center">
            <h2>Create a new item</h2>
            <form onSubmit={handleSubmit(addItemForm)} autoComplete="off">
                <div className="grid-container">
                    <TextField
                        label="Name"
                        name="name"
                        onChange={handleChange}
                        value={formValues.name}
                        error={formErrors.name}
                    />
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        onChange={handleChange}
                        value={formValues.price}
                        error={formErrors.price}
                    />
                    <TextField
                        label="Color"
                        name="color"
                        onChange={handleChange}
                        value={formValues.color}
                        error={formErrors.color}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        onChange={handleChange}
                        value={formValues.location}
                        error={formErrors.location}
                    />
                    <TextField
                        label="Owner"
                        name="owner"
                        onChange={handleChange}
                        value={formValues.owner}
                        error={formErrors.owner}
                    />
                </div>
                <section>
                    <span style={{ float: "left" }}>
                        <BackBtn onClick={goBack}>Go Back</BackBtn>
                    </span>
                    <span style={{ float: "right" }}>
                        <SubmitBtn>Submit</SubmitBtn>
                    </span>
                </section>
            </form>
        </div>
    );
};

export default AddItemForm;
