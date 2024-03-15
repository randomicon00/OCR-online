import React from "react";

const Button = ({ name, label, color }) => {
  return (
    <div>
      <button name={name} style={{ color }}>
        {label} 
      </button>
    </div>
  );
};

export default Button;
