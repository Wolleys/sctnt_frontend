import { FC } from "react";
import AddItemForm from "./addItemForm";
import { initialValues } from "../../../../form_values/item";
import { InterfacesProvider } from "../../../../context/InterfacesContext";

const AddItem: FC = () => {
    return (
        <InterfacesProvider formValues={initialValues}>
            <AddItemForm />
        </InterfacesProvider>
    );
};

export default AddItem;
