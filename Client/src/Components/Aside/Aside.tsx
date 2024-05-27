import React from "react";
import "./Aside.css";

// Aside Component
const Aside = () => {
  try {
    return (
      <aside
        id="bdSidebar"
        className="bdSidebar d-flex flex-column flex-shrink-0 p-3 text-white offcanvas-md offcanvas-start min-vh-100"
      >
        <a href="#" className="navbar-brand m-4 ms-md-2 ">
          {/* Profile section */}
          <div className="d-flex">
            {/* Profile picture */}
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
              className="img-fluid rounded-circle me-2"
              width="50px"
              height="50px"
            />
            {/* User name */}
            <span className="userName ms-2">
              <h5 className="mt-1 m-0">Yellow Owl</h5>
              <small>Admin</small>
            </span>
            {/* Close button */}
            <button
              type="button"
              className="btn-close btn-close-white ms-auto d-md-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdSidebar"
              aria-label="Close"
            />
          </div>
        </a>
      </aside>
    );
  } catch (error) {
    console.error("Error in Aside component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default Aside;
