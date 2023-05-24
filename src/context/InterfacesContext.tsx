import { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";
import { ItemInterface } from "../interfaces/itemInterface";

export interface InterfacesContextType {
    item: ItemInterface;
    items?: ItemInterface[];
    setItems: Dispatch<SetStateAction<ItemInterface>>;
}

export const InterfacesContext = createContext<InterfacesContextType | undefined>(undefined);

interface InterfacesProviderProps {
    initialItem: ItemInterface;
    displayItems?: ItemInterface[];
    children: ReactNode;
}

export const InterfacesProvider: FC<InterfacesProviderProps> = ({ initialItem, displayItems, children }) => {
    const [item, setItems] = useState<ItemInterface>(initialItem);
    const value = { item, setItems, items: displayItems }

    return (
        <InterfacesContext.Provider value={value}>
            {children}
        </InterfacesContext.Provider>
    );
};
