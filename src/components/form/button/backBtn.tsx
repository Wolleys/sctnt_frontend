import { FC } from "react";
import "./button.css";
import { ButtonInterface } from "../../../interfaces/buttonInterface";

const BackBtn: FC<ButtonInterface> = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps} className="back-btn" type="button">
            {children}
        </button>
    );
};

export default BackBtn;
