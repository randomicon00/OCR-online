import React from 'react';
import logo from './logo.svg';
import Upload from './components/Upload';


function App() {
  return (
    <div className="text-3xl font-bold underline">
      <p>OCR online conversion homepage!</p>
      <div>
        <Upload name="image upload" />
      </div>
    </div>
  );
}

export default App;
