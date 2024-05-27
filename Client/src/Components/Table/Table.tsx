import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import TableProps, { StudentData } from "./TableProps";

// Function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month},${year}`;
};

// Table component
const Table: React.FC<TableProps> = ({ searchText }) => {
  const [studentDatas, setStudentDatas] = useState<StudentData[]>([]); // State for student data
  const navigate = useNavigate(); // Initialize useNavigate hook

  try {
    useEffect(() => {
      const fetchStudentList = async () => {
        try {
          const res = await axios.get("http://localhost:8800/studentlist"); // Fetch student data from API
          setStudentDatas(res.data); // Set student data state
        } catch (err) {
          console.error("Error fetching student list:", err); // Log any errors
        }
      };
      fetchStudentList();
    }, []); // Fetch student data on component mount
  } catch (error) {
    console.error("Error in Table component:", error); // Log any errors
  }

  const filteredStudents = studentDatas.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  ); // Filter student data based on search text

  // Function to handle student deletion
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/studentlist/${id}`); // Delete student from API
      // Update the state to remove the deleted student
      setStudentDatas((prevStudentDatas) =>
        prevStudentDatas.filter((student) => student.id !== id)
      );
    } catch (err) {
      console.error("Error deleting student:", err); // Log any errors
    }
  };

  return (
    <table className="table rounded table-hover" id="table">
      <thead>
        <tr>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col" className="tableResponsive">
            PHONE
          </th>
          <th scope="col" className="tableResponsive">
            ENROLL NUMBER
          </th>
          <th scope="col" className="tableResponsive">
            DATE OF ADMISSION
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {filteredStudents &&
          filteredStudents?.length > 0 &&
          filteredStudents.map((studentData, index) => (
            <tr key={index} className="tableRow">
              <td className="fw-medium tableData tableDataName">
                <img
                  className="rounded-circle me-1 tableResponsiveImg"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="profile-image"
                  width="30px"
                  height="30px"
                />
                {studentData.name}
              </td>
              <td className="overflow-auto tableDataEmail">
                {studentData.email}
              </td>
              <td className="tableResponsive">{studentData.number}</td>
              <td className="tableResponsive">{studentData.enroll_number}</td>
              <td className="tableResponsive">
                {formatDate(studentData.date_of_admission)}
              </td>
              <td className="flex-nowrap">
                <button className="btn p-1 tableBtn">
                  <Link to={`/editstudent/${studentData.id}`}>
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5354 2.8L12.7278 4.99236C12.8201 5.08472 12.8201 5.23541 12.7278 5.32777L7.41944 10.6361L5.16389 10.8865C4.8625 10.9205 4.60729 10.6653 4.64132 10.3639L4.89167 8.10833L10.2 2.8C10.2924 2.70764 10.4431 2.70764 10.5354 2.8ZM14.4729 2.2434L13.2868 1.05729C12.9174 0.687844 12.317 0.687844 11.9451 1.05729L11.0847 1.9177C10.9924 2.01007 10.9924 2.16076 11.0847 2.25312L13.2771 4.44548C13.3694 4.53784 13.5201 4.53784 13.6125 4.44548L14.4729 3.58507C14.8424 3.21319 14.8424 2.61284 14.4729 2.2434ZM10.0833 9.19236V11.6667H2.30556V3.88889H7.89097C7.96875 3.88889 8.04167 3.85729 8.09757 3.80382L9.06979 2.83159C9.25451 2.64687 9.12326 2.33333 8.86319 2.33333H1.91667C1.27257 2.33333 0.75 2.8559 0.75 3.5V12.0556C0.75 12.6996 1.27257 13.2222 1.91667 13.2222H10.4722C11.1163 13.2222 11.6389 12.6996 11.6389 12.0556V8.22014C11.6389 7.96007 11.3253 7.83125 11.1406 8.01354L10.1684 8.98576C10.1149 9.04166 10.0833 9.11458 10.0833 9.19236Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </Link>
                </button>
                <button
                  className="btn p-1 mb-1 tableBtn"
                  onClick={() => handleDelete(studentData.id)}
                >
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 15.6875C2.5 16.0356 2.63828 16.3694 2.88442 16.6156C3.13056 16.8617 3.4644 17 3.8125 17H11.6875C12.0356 17 12.3694 16.8617 12.6156 16.6156C12.8617 16.3694 13 16.0356 13 15.6875V6.5H2.5V15.6875ZM9.9375 8.6875C9.9375 8.57147 9.98359 8.46019 10.0656 8.37815C10.1477 8.2961 10.259 8.25 10.375 8.25C10.491 8.25 10.6023 8.2961 10.6844 8.37815C10.7664 8.46019 10.8125 8.57147 10.8125 8.6875V14.8125C10.8125 14.9285 10.7664 15.0398 10.6844 15.1219C10.6023 15.2039 10.491 15.25 10.375 15.25C10.259 15.25 10.1477 15.2039 10.0656 15.1219C9.98359 15.0398 9.9375 14.9285 9.9375 14.8125V8.6875ZM7.3125 8.6875C7.3125 8.57147 7.35859 8.46019 7.44064 8.37815C7.52269 8.2961 7.63397 8.25 7.75 8.25C7.86603 8.25 7.97731 8.2961 8.05936 8.37815C8.14141 8.46019 8.1875 8.57147 8.1875 8.6875V14.8125C8.1875 14.9285 8.14141 15.0398 8.05936 15.1219C7.97731 15.2039 7.86603 15.25 7.75 15.25C7.63397 15.25 7.52269 15.2039 7.44064 15.1219C7.35859 15.0398 7.3125 14.9285 7.3125 14.8125V8.6875ZM4.6875 8.6875C4.6875 8.57147 4.73359 8.46019 4.81564 8.37815C4.89769 8.2961 5.00897 8.25 5.125 8.25C5.24103 8.25 5.35231 8.2961 5.43436 8.37815C5.51641 8.46019 5.5625 8.57147 5.5625 8.6875V14.8125C5.5625 14.9285 5.51641 15.0398 5.43436 15.1219C5.35231 15.2039 5.24103 15.25 5.125 15.25C5.00897 15.25 4.89769 15.2039 4.81564 15.1219C4.73359 15.0398 4.6875 14.9285 4.6875 14.8125V8.6875ZM13.4375 3.875H10.1562L9.89922 3.36368C9.84477 3.25436 9.7609 3.16241 9.65704 3.09816C9.55318 3.03391 9.43345 2.99992 9.31133 3H6.18594C6.06409 2.99954 5.94457 3.0334 5.84108 3.09772C5.73759 3.16204 5.65431 3.25421 5.60078 3.36368L5.34375 3.875H2.0625C1.94647 3.875 1.83519 3.9211 1.75314 4.00315C1.67109 4.08519 1.625 4.19647 1.625 4.3125V5.1875C1.625 5.30354 1.67109 5.41482 1.75314 5.49686C1.83519 5.57891 1.94647 5.625 2.0625 5.625H13.4375C13.5535 5.625 13.6648 5.57891 13.7469 5.49686C13.8289 5.41482 13.875 5.30354 13.875 5.1875V4.3125C13.875 4.19647 13.8289 4.08519 13.7469 4.00315C13.6648 3.9211 13.5535 3.875 13.4375 3.875Z"
                      fill="#DC2626"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
