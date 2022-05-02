import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import {ExampleOneProvider} from './contexts/ExampleOne';

function App() {
  return (
    <div className="App">
      <ExampleOneProvider>
        <Navbar />
        <Body />
      </ExampleOneProvider>
    </div>
  );
}

export default App;
