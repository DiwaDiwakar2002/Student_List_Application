import React, { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../Components/Form/Form"; // Import Form component
import "./AddNewStudent.css";
import axios from "axios";
import { useNavigate } from "react-router";

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enrollNumber: "",
    admissionDate: "",
  });

  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const addNewStudentSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/studentlist", formData); // Post form data to API
      navigate("/"); // Navigate to home page after submission
    } catch (err) {
      console.error("Error addnewstudent form:", err); // Log any errors
    }
  };

  return (
    <section className="addNewStudentSection d-flex justify-content-center align-items-center p-4">
      {/* Render Form component */}
      <Form
        FormName="Add New Student"
        buttonName="Submit"
        onSubmit={addNewStudentSubmit}
        onChange={handleInputChange}
        formData={formData}
      />
    </section>
  );
};

export default AddNewStudent;
