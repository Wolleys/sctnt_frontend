interface FormValues {
  [key: string]: string;
}

type FormErrors = Partial<FormValues>;

export const validateItem = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.description) {
    errors.description = "Description is required";
  }

  if (!values.part_number) {
    errors.part_number = "Part number is required";
  }

  if (!values.price) {
    errors.price = "Price is required";
  }

  if (!values.part_status) {
    errors.part_status = "Part status is required";
  }

  if (!values.location) {
    errors.location = "Location is required";
  }

  return errors;
};
