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
        description: "",
        part_number: "",
        price: "",
        part_status: "",
        location: "",
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
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        value={formValues.description}
                        error={formErrors.description}
                    />
                    <TextField
                        label="Part number"
                        name="part_number"
                        onChange={handleChange}
                        value={formValues.part_number}
                        error={formErrors.part_number}
                    />
                    <TextField
                        label="Price"
                        name="price"
                        onChange={handleChange}
                        value={formValues.price}
                        error={formErrors.price}
                    />
                    <TextField
                        label="Part status"
                        name="part_status"
                        onChange={handleChange}
                        value={formValues.part_status}
                        error={formErrors.part_status}
                    />
                    <TextField
                        label="Location"
                        name="location"
                        onChange={handleChange}
                        value={formValues.location}
                        error={formErrors.location}
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
