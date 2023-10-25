import React, { useState, useEffect } from "react";

const STATUS = {
  idle: 0,
  progress: 1,
  complete: 2,
};

const Convert = () => {
  const [status, setStatus] = useState(STATUS["idle"]);

  useEffect(() => {
    // Simulate a conversion that takes 5 seconds
    if (status === STATUS[""]) {
      const timeoutId = setTimeout(() => {
        setStatus("complete");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  const startConversion = () => {
    setStatus(STATUS["progress"]);
  };

  const renderContent = () => {
    if (status === STATUS["idle"]) {
      return <button onClick={startConversion}>Convert</button>;
    }

    if (status === STATUS["progress"]) {

      return <p>Text extraction from file is in progress...</p>;
    }

    if (status === STATUS["complete"]) {
      return <p>Text extraction has been completed!</p>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Convert;
