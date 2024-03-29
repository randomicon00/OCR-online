import React, { useState, useRef, useEffect } from "react";
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

const App = () => {
  const [show, setShow] = useState(false);
  const refEl = useRef(null);

  const toggleVisibility = () => {
    setShow(show => !show);
  };

  useEffect(() => {
    const el = refEl.current;

    const handleClick = (e) => {
      console.log("Clicked!");
    };

    if (refEl.current) {
      el.addEventListener("click", handleClick);
    }

    // Cleanup at the end of the lifecycle
    return () => {
      el.removeEventListener("click",1 handleClick);
    };
  }, []);

  return (
    <div id="main" style={{ backgroundColor: "white" }}>
      <Layout>
        <Intro />
        <Convert />
        <Benefits />
      </Layout>
      <div>
        <div id="listener" ref={refEl}>
          Upload File
        </div>
      </div>
      <button onClick={toggleVisibility}>Change Visibility</button>
    </div>
  );
};

export default App;
