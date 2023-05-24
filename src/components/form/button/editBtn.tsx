import { FC } from "react";
import "./button.css";
import { ButtonInterface } from "../../../interfaces/buttonInterface";

const EditBtn: FC<ButtonInterface> = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps} className="edit-btn">
            {children}
        </button>
    );
};

export default EditBtn;
