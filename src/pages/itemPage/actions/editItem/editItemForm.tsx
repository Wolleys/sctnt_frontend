import { FC } from "react";
import useForm from "../../../../hooks/useForm";
import useEditContext from "../../../../hooks/useEditContext";
import TextField from "../../../../components/form/textField";
import BackBtn from "../../../../components/form/button/backBtn";
import { validateItem } from "../../../../validation/validateItem";
import SubmitBtn from "../../../../components/form/button/submitBtn";

const EditItemForm: FC = () => {
    const { setEditing } = useEditContext();

    const initialValues = {
        name: "",
        price: "",
        color: "",
        location: "",
        owner: "",
    };

    const [formValues, { handleChange, handleSubmit }, formErrors] = useForm(
        initialValues,
        validateItem
    );

    const EditItemForm = async () => {
        try {
            console.log(formValues);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="center">
            <h2>Edit item</h2>
            <form onSubmit={handleSubmit(EditItemForm)} autoComplete="off">
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
                        <BackBtn onClick={() => setEditing(false)}>Cancle</BackBtn>
                    </span>
                    <span style={{ float: "right" }}>
                        <SubmitBtn>Submit</SubmitBtn>
                    </span>
                </section>
            </form>
        </div>
    );
};

export default EditItemForm;
