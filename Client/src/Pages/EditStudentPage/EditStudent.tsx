import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Form from "../../Components/Form/Form"; // Import Form component
import "./EditStudent.css";
import axios from "axios"; // Import axios for HTTP requests
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate hooks

const EditStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const studentId = location.pathname.split("/")[2]; // Extract student ID from URL

  // State to store edit data
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    enrollNumber: "",
    admissionDate: "",
  });

  // Fetch student data on component mount
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/studentlist/${studentId}`);
        const { name, email, number, enroll_number, date_of_admission } = res.data;

        // Format admission date
        const formattedDate = new Date(date_of_admission);
        formattedDate.setDate(formattedDate.getDate() + 1);

        // Update state with fetched data
        setEditData({
          name,
          email,
          phone: number,
          enrollNumber: enroll_number,
          admissionDate: formattedDate.toISOString().split('T')[0],
        });
      } catch (err) {
        console.error("Error fetching student data:", err); // Log any errors
      }
    };
  
    fetchStudentData();
  }, [studentId]);

  // Function to handle form submission for editing student
  const editStudentButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/studentlist/${studentId}`, editData); // Put request to update student data
      navigate("/"); // Redirect to home page after update
    } catch (err) {
      console.error("Error updating student data:", err); // Log any errors
    }
  };

  // Function to handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <section className="editStudentSection d-flex justify-content-center align-items-center p-4">
      {/* Render Form component to edit student */}
      <Form
        FormName="Edit Student"
        buttonName="Update"
        onSubmit={editStudentButton}
        onChange={handleInputChange}
        formData={editData}
      />
    </section>
  );
};

export default EditStudent;
