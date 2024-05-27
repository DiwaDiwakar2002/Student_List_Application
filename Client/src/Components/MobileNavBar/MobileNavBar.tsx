import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MobileNavBar.css";

// Mobile Navigation bar component
const MobileNavBar = () => {
  try {
    return (
      <div className="bg-light flex-fill">
        {/* Navigation bar */}
        <div className="p-3 d-md-none d-flex align-items-center text-white mobileNav">
          {/* Menu toggle */}
          <a
            href="#"
            className="text-white"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdSidebar"
          >
            <FontAwesomeIcon icon={faBars} /> {/* Menu icon */}
          </a>
          {/* Title */}
          <span className="ms-3">
            <h5 className="m-0">Students</h5>
          </span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in MobileNavBar component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default MobileNavBar;
