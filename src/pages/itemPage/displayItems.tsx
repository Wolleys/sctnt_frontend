import { FC } from "react";
import ItemsList from "./table/itemsList";
import { itemsData } from "../../data/item";
import { initialValues } from "../../form_values/item";
import { InterfacesProvider } from "../../context/InterfacesContext";

const DisplayItems: FC = () => {
    return (
        <InterfacesProvider formValues={initialValues} displayItems={itemsData}>
            <ItemsList />
        </InterfacesProvider>
    );
};

export default DisplayItems;
