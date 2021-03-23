import { Component } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Vishwas">
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
