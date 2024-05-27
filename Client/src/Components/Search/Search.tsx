import React, { useEffect, useState } from "react";
import Button from "../Button/Button"; // Import Button component
import "./Search.css";
import { useNavigate } from "react-router"; // Import useNavigate hook from react-router
import SearchProps from "./SearchProps";

// Search component
const Search: React.FC<SearchProps> = ({ onChange, value }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth < 768); // Set state for screen width

  try {
    useEffect(() => {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth < 768); // Update isWideScreen state based on window width
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // Empty dependency array ensures useEffect only runs once

    return (
      <form className="d-flex" role="search">
        {/* Search input */}
        <input
          className="form-control me-2 searchInput"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={onChange}
          value={value}
        />

        {/* Button for adding new student */}
        <Button
          type="button"
          className="btn btn-success text-nowrap px-3"
          id="buttonEl"
          buttonName={isWideScreen ? "ADD" : "ADD NEW STUDENT"} // Change button name based on screen width
          onClick={() => navigate("addnewstudent")} // Navigate to addnewstudent route on button click
        />
      </form>
    );
  } catch (error) {
    console.error("Error in Search component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default Search;
