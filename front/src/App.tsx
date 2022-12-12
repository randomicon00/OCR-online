import React, { useState, useRef, useEffect } from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

//Todo include a router here.
const App = () => {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    setShow((show) => !show); 
  }

  useEffect(() => {
    const el = ref.current;
    
    const handleClick = (e) => {
      console.log("Clicked!");
    };
    
    if (ref.current) {
      el.addEventListener("click", handleClick);
    }
    
    return () => {
      el.removeEventListener("click", handleClick);
    };    
  }, []);
  
  return (
    <div id="container" style={{ backgroundColor: "grey" }}>
      <Layout>
        <Intro />
        <Convert />
        <Benefits />
      </Layout>
      <div>
        <div id="listener" ref={ref}>Upload File</div>
      </div>
      <button onClick={toggle}>Toggle Visibility</button>
    </div>
  );
}

export default App;

