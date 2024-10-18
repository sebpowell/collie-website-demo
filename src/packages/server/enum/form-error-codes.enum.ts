enum FormErrorCodes {
  "required" = "required",
  "email" = "email",
}

const FormFieldErrorMessages: { [key in FormErrorCodes]: string } = {
  [FormErrorCodes.email]: "Please enter a valid email",
  [FormErrorCodes.required]: "This field is required",
};

export { FormErrorCodes, FormFieldErrorMessages };
