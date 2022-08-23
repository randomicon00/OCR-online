import React from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/Benefits";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Intro />
      <Convert />
      <Benefits />
    </Layout>
  );
}

export default App;
