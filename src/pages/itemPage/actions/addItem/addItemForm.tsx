import { FC } from "react";
import axios from "../../../../api";
import SupplierSelect from "./supplierSelect";
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
        description: newItem.description || "",
        part_number: newItem.part_number || "",
        price: newItem.price || "",
        part_status: newItem.part_status || "",
        location: newItem.location || "",
    };

    const [formValues, { handleChange, handleSubmit }, formErrors] = useForm(
        initialValues,
        validateItem
    );

    const addItemForm = async () => {
        try {
          await axios.post("/items", formValues);
          console.log("Item added successfully");
        } catch (error) {
          console.error("Error adding item:", error);
        }
      };

    return (
        <div className="center">
            <h2>Create a new item</h2>
            <form onSubmit={handleSubmit(addItemForm)} autoComplete="off">
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
                    <SupplierSelect />

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
