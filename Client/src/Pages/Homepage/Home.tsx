import React, { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MobileNavBar from "../../Components/MobileNavBar/MobileNavBar"; // Import MobileNavBar component
import Aside from "../../Components/Aside/Aside"; // Import Aside component
import NavBar from "../../Components/NavBar/NavBar"; // Import NavBar component
import Table from "../../Components/Table/Table"; // Import Table component
import Search from "../../Components/Search/Search"; // Import Search component
import axios from "axios"; // Import axios for HTTP requests
import { useNavigate } from "react-router"; // Import useNavigate hook

const Home = () => {
  const navigate = useNavigate();

  // Fetch student list on component mount
  useEffect(() => {
    const fetchStudentList = async () => {
      try {
        const res = await axios.get("http://localhost:8800/studentlist");
        // Handle fetched data as needed
      } catch (err) {
        console.error("Error fetching student list:", err); // Log any errors
      }
    };
    fetchStudentList();
  }, []);

  // State to store search text
  const [searchText, setSearchText] = useState<string>("");

  // Function to handle search input change
  const searchFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <section className="HomePage container-fluid p-0 m-0">
        {/* Render MobileNavBar component */}
        <MobileNavBar />
        <div className="row p-0 m-0">
          <div className="col-3 p-0">
            {/* Render Aside component */}
            <Aside />
          </div>
          <div className="col-lg-9 col-md-9 p-0">
            {/* Render NavBar component */}
            <NavBar />
            <div className="d-flex p-4 mt-3">
              <h2 className="fs-sm-3 homePageHeading mt-2">Students</h2>
              <div className="ms-auto">
                {/* Render Search component */}
                <Search onChange={searchFunction} value={searchText} />
              </div>
            </div>
            <div className="px-4 tableDiv">
              {/* Render Table component with searchText prop */}
              <Table searchText={searchText} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
