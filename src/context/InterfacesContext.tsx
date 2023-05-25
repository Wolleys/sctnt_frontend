import { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";
import { ItemInterface } from "../interfaces/itemInterface";

export interface InterfacesContextType {
    newItem: ItemInterface;
    getItems?: ItemInterface[];
    setGetItems: Dispatch<SetStateAction<ItemInterface[]>>;
}

export const InterfacesContext = createContext<InterfacesContextType | undefined>(undefined);

interface InterfacesProviderProps {
    formValues: ItemInterface;
    displayItems?: ItemInterface[];
    children: ReactNode;
}

export const InterfacesProvider: FC<InterfacesProviderProps> = ({ formValues, displayItems, children }) => {
    const [newItem, setNewItem] = useState<ItemInterface>(formValues);
    const [getItems, setGetItems] = useState<ItemInterface[]>(displayItems || []);
    const value = { newItem, setNewItem, getItems, setGetItems };

    return (
        <InterfacesContext.Provider value={value}>
            {children}
        </InterfacesContext.Provider>
    );
};
