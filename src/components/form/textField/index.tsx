import { FC, ChangeEvent } from "react";
import "./textField.css";

interface InputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<InputProps> = ({
    label,
    name,
    type = "text",
    value,
    onChange,
}) => {
    return (
        <div className="input-container">
            <label htmlFor={name} className="input-label">
                {label}:
            </label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
};

export default TextField;
