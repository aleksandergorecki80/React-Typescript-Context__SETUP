import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ElementsList from './components/ElementsList';
import AddElementForm  from './components/AddElementForm';
import { ListContextProvider } from './contexts/ListContext';
import { ExampleTwoProvider } from './contexts/ExampleTwo';


function App() {
  return (
    <div className="App">
      <ExampleTwoProvider>
        <ListContextProvider>
          <Navbar />
          <ElementsList />
          <AddElementForm />
        </ListContextProvider>
      </ExampleTwoProvider>
    </div>
  );
}

export default App;
