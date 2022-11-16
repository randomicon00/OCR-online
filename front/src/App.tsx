import React, { useState, useRef, useEffect } from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

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
    <div id="container">
    <Layout>
      <Intro />
      <Convert />
      <Benefits />
    </Layout>
      <button onClick={toggle}>Toggle Visibility</button>
      <div>
        <div id="listener" ref={ref}>Hello world</div>
      </div> 
    </div>
  );
}

export default App;

