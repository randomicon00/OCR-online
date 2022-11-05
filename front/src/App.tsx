import React, { useState } from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

const App = () => {
  const [state, setState] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <div id="container">
    <Layout>
      <Intro />
      <Convert />
      <Benefits />
    </Layout>
      <button onClick={() => setShow((show) => !show)}>Toggle Show</button>
    </div>
  );
}

export default App;

