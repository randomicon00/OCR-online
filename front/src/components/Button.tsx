import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button name={name} style={{ backgroundColor: "green" }}>
        Sample Button
      </button>
    </div>
  );
};

export default Button;

