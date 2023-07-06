import React from "react";

const Button = ({ name, text }) => {
  return (
    <div>
      <button name={name} style={{ backgroundColor: "green" }}>
        {text} 
      </button>
    </div>
  );
};

export default Button;
