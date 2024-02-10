import React from "react";

const Button = ({ name, label, backgroundColor }) => {
  return (
    <div>
      <button name={name} style={{ backgroundColor }}>
        {label} 
      </button>
    </div>
  );
};

export default Button;
