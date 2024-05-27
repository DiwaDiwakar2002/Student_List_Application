import React from "react";
import "./NavBar.css";

// Home page navigation bar component
const NavBar = () => {
  try {
    return (
      <div className="bg-light container-fluid flex-fill p-0 offcanvas-md offcanvas-start">
        {/* Navigation bar */}
        <div className="p-4 d-flex align-items-center text-white mobileNav">
          {/* Title */}
          <span className="ms-2">
            <h5 className="m-0">Students</h5>
          </span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in NavBar component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default NavBar;
