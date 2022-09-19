import React from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div id="container">
    <Layout>
      <Intro />
      <Convert />
      <Benefits />
    </Layout>
    </div>
  );
}

export default App;
