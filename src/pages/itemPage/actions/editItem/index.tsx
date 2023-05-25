import { FC } from "react";
import ItemDetails from "./itemDetails";
import EditItemForm from "./editItemForm";
import { itemsData } from "../../../../data/item";
import { initialValues } from "../../../../form_values/item";
import useEditContext from "../../../../hooks/useEditContext";
import { InterfacesProvider } from "../../../../context/InterfacesContext";

const EditItem: FC = () => {
    const { editing, setEditing } = useEditContext();
    const editRow = (itemId: string): void => {
        setEditing(true);
    };
    return (
        <>
            <InterfacesProvider formValues={initialValues} displayItems={itemsData}>
                {editing ? <EditItemForm /> : <ItemDetails editRow={editRow} />}
            </InterfacesProvider>
        </>
    );
};

export default EditItem;
