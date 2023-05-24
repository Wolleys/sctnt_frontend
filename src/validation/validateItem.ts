interface FormValues {
  [key: string]: string;
}

type FormErrors = Partial<FormValues>;

export const validateItem = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.price) {
    errors.price = "Price is required";
  }

  if (!values.color) {
    errors.color = "Color is required";
  }

  if (!values.location) {
    errors.location = "Location is required";
  }

  if (!values.owner) {
    errors.owner = "Owner is required";
  }

  return errors;
};
