import { FC, ChangeEvent } from "react";
import "./textField.css";

interface InputProps {
    label?: string;
    name?: string;
    type?: string;
    error?: string;
    value: string;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<InputProps> = (props) => {
    const { label, name, error, ...other } = props;
    return (
        <div className="input-container">
            <label htmlFor={name} className="input-label">
                {label?.concat(":")}
            </label>
            <input
                {...other}
                name={name}
                className={`${error ? "input-field-error" : "input-field"}`}
            />
            <span className="input-error-text">{error}</span>
        </div>
    );
};

export default TextField;
