import { FC, Dispatch, SetStateAction, createContext, ReactNode, useState } from "react";

export interface EditContextType {
    editing: boolean;
    setEditing: Dispatch<SetStateAction<boolean>>;
}

export const EditContext = createContext<EditContextType | null>(null);

interface EditContextProviderProps {
    children: ReactNode;
}

export const EditContextProvider: FC<EditContextProviderProps> = ({
    children,
}) => {
    const [editing, setEditing] = useState(false);

    const value: EditContextType = { editing, setEditing };

    return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};
