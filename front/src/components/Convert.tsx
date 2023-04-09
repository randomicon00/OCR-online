import React, { useState, useEffect } from "react";

const Convert = () => {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    // Simulate a conversion that takes 5 seconds
    if (status === "progress") {
      const timeoutId = setTimeout(() => {
        setStatus("complete");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  const startConversion = () => {
    setStatus("progress");
  };

  const renderContent = () => {
    if (status === "idle") {
      return <button onClick={startConversion}>Convert</button>;
    }

    if (status === "progress") {

      return <p>Text extraction from file is in progress...</p>;
    }

    if (status === "complete") {
      return <p>Text extraction has been completed!</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Convert;
