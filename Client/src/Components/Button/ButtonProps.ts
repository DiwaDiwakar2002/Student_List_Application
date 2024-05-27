import React from "react";


// Define ButtonProps interface extending ButtonHTMLAttributes
export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Custom prop for button name
  buttonName?: string;
}
