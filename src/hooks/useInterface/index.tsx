import { useContext } from "react";
import {
  InterfacesContext,
  InterfacesContextType,
} from "../../context/InterfacesContext";

export const useInterfacesContext = (): InterfacesContextType => {
  const context = useContext(InterfacesContext);
  if (!context) {
    throw new Error(
      "useInterfacesContext must be used within an InterfacesProvider"
    );
  }
  return context;
};
