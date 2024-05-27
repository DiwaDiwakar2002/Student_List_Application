import React from "react";
import "./Button.css";
import ButtonProps from "./ButtonProps";

// Button component
const Button: React.FC<ButtonProps> = ({
  className,
  id,
  type,
  buttonName = "Click", // Default button name is "Click"
  onClick,
  ...props
}) => {
  try {
    return (
      <button type={type} className={className} id={id} onClick={onClick} {...props}>
        {buttonName} {/* Display the button name */}
      </button>
    );
  } catch (error) {
    console.error("Error in Button component:", error); // Log any errors
    return null; // Return null or any fallback UI in case of error
  }
};

export default Button;
