import React from "react";
import Button from "../Button/Button"; // Importing Button component
import "./Form.css";
import { useNavigate } from "react-router-dom";
import FormProps from "./FormProps"; // Importing FormProps interface

// Form component
const Form: React.FC<FormProps> = ({
  FormName,
  buttonName,
  onClick,
  onSubmit,
  onChange,
  formData,
}) => {
  const navigate = useNavigate(); // Hook for navigation

  try {
    return (
      <form
        className="form px-lg-5 px-md-5 px-sm-3 px-3 d-flex flex-column justify-content-center"
        onSubmit={onSubmit}
      >
        <h5>{FormName}</h5> {/* Display FormName */}
        <div className="mb-3">
          {/* Input fields for form data */}
          <input
            type="text"
            className="form-control formInputField"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          <input
            type="email"
            className="form-control formInputField"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <input
            type="number"
            className="form-control formInputField"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
          />
          <input
            type="number"
            className="form-control formInputField"
            placeholder="Enroll Number"
            name="enrollNumber"
            value={formData.enrollNumber}
            onChange={onChange}
          />
          <input
            type="date"
            className="form-control formInputField"
            placeholder="Date of Admission"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={onChange}
          />
        </div>
        {/* Submit button */}
        <Button
          className="btn btn-primary mt-2 formButton1"
          buttonName={buttonName} // Display buttonName
          type="submit"
        />
        {/* Cancel button */}
        <Button
          className="btn btn-danger mt-2 formButton2"
          buttonName="Cancel" // Hardcoded button name
          onClick={() => navigate("/")} // Navigate to home page on click
          type="button"
        />
      </form>
    );
  } catch (error) {
    console.error("Error in Form component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default Form;
