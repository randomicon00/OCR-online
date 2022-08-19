import React from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/benefits";

function App() {
  return (
    <div className="flex flex-row">
      <Intro />
      <Convert />
      <Benefits />
    </div>
  );
}

export default App;
