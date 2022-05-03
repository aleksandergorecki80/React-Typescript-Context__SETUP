import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { ExampleOneProvider } from './contexts/ExampleOne';
import { ExampleTwoProvider } from './contexts/ExampleTwo';

function App() {
  return (
    <div className="App">
      <ExampleTwoProvider>
        <ExampleOneProvider>
          <Navbar />
          <Body />
        </ExampleOneProvider>
      </ExampleTwoProvider>
    </div>
  );
}

export default App;
