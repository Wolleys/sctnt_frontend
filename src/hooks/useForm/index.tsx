import { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
    [key: string]: string;
}

type FormErrors = Partial<FormValues>;

type FormHandlers = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (
        callback: () => Promise<void>
    ) => (e: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
};

const useForm = (
    initialValues: FormValues,
    validate?: (values: FormValues) => FormErrors
): [FormValues, FormHandlers, FormErrors] => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit =
        (callback: () => Promise<void>) =>
            async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (validate) {
                    const formErrors = validate(values);
                    setErrors(formErrors);
                    if (Object.keys(formErrors).length === 0) {
                        try {
                            console.log("Form submitted:", values);
                            await callback();
                            resetForm();
                        } catch (error) {
                            console.error("Form submission error:", error);
                        }
                    }
                } else {
                    try {
                        console.log("Form submitted:", values);
                        await callback();
                        resetForm();
                    } catch (error) {
                        console.error("Form submission error:", error);
                    }
                }
            };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    const formHandlers: FormHandlers = {
        handleChange,
        handleSubmit,
        resetForm,
    };

    return [values, formHandlers, errors];
};

export default useForm;
