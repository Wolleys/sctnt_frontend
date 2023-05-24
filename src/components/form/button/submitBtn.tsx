import { FC } from "react";
import "./button.css";
import { ButtonInterface } from "../../../interfaces/buttonInterface";

const SubmitBtn: FC<ButtonInterface> = (props) => {
    const { children, ...otherProps } = props;
    return (
        <button {...otherProps} className="submit-btn" type="submit">
            {children}
        </button>
    );
};

export default SubmitBtn;
