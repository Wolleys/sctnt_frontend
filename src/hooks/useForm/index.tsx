import { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
    [key: string]: string;
}

type FormHandlers = {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (callback: () => Promise<void>) => (e: FormEvent<HTMLFormElement>) => void;
    resetForm: () => void;
};

const useForm = (initialValues: FormValues): [FormValues, FormHandlers] => {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (callback: () => Promise<void>) =>
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            await callback();
            resetForm();
        };

    const resetForm = () => {
        setValues(initialValues);
    };

    const formHandlers: FormHandlers = {
        handleChange,
        handleSubmit,
        resetForm,
    };

    return [values, formHandlers];
};

export default useForm;
