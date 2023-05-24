import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import TextField from "../../../../components/form/textField";
import BackBtn from "../../../../components/form/button/backBtn";
import SubmitBtn from "../../../../components/form/button/submitBtn";

const EditItemForm: FC = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const initialValues = {
        name: "",
        price: "",
        color: "",
        location: "",
        owner: "",
    };

    const [formValues, { handleChange, handleSubmit }] = useForm(initialValues);

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

export default EditItemForm;
