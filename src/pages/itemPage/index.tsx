import { FC } from "react";
import { EditContextProvider } from "../../context/EditContext";
import SecondaryLayout from "../../components/ui/layout/secondary";

const Items: FC = () => {
    return (
        <EditContextProvider>
            <SecondaryLayout />
        </EditContextProvider>
    );
};

export default Items;
