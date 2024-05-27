// FormProps.ts

import React from "react";

// Define FormProps interface
interface FormProps {
  FormName: string;
  buttonName: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    enrollNumber: string;
    admissionDate: string;
  };
}

export default FormProps;
