import { FC } from "react";
import "./button.css";
import { ButtonInterface } from "../../../interfaces/buttonInterface";

const AddBtn: FC<ButtonInterface> = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps} className="add-btn">
            {children}
        </button>
    );
};

export default AddBtn;
