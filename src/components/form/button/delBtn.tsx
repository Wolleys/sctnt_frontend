import { FC } from "react";
import "./button.css";
import { ButtonInterface } from "../../../interfaces/buttonInterface";

const DeleteBtn: FC<ButtonInterface> = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps} className="del-btn">
            {children}
        </button>
    );
};

export default DeleteBtn;
