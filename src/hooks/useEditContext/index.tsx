import { useContext } from "react";
import { EditContext, EditContextType } from "../../context/EditContext";

const useEditContext = (): EditContextType => {
    const context = useContext(EditContext);
    if (!context) {
        throw new Error(
            "useEditContext must be used within an EditContextProvider"
        );
    }
    return context;
};

export default useEditContext;
