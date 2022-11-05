import React, { useState } from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

const App = () => {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((show) => !show); 
  }

  return (
    <div id="container">
    <Layout>
      <Intro />
      <Convert />
      <Benefits />
    </Layout>
      <button onClick={toggle}>Toggle Visibility</button>
    </div>
  );
}

export default App;

