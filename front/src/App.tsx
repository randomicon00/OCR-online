import React from 'react';
import Intro from "./components/Intro";
import Convert from "./components/Convert";
import Benefits from "./components/benefits";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Intro />
      <Convert />
      <Benefits />
    </div>
  );
}

export default App;
