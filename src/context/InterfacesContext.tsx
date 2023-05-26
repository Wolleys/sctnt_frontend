import { FC, createContext, ReactNode, useState, useEffect } from "react";
import axios from "../api";
import { ItemInterface } from "../interfaces/itemInterface";

export interface InterfacesContextType {
    newItem: ItemInterface;
    getItems?: ItemInterface[];
    setGetItems: (getItems: ItemInterface[]) => void;
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("/items");
            setGetItems(response.data.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const value = { newItem, setNewItem, getItems, setGetItems };

    return (
        <InterfacesContext.Provider value={value}>
            {children}
        </InterfacesContext.Provider>
    );
};
