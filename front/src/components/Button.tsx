import React from "react";

const Button = ({ name, label }) => {
  return (
    <div>
      <button name={name} style={{ backgroundColor: "green" }}>
        {label} 
      </button>
    </div>
  );
};

export default Button;
