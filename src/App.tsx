import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonComponent from './components/PersonComponent';

function App() {

  const components = [{firstname: "André", lastname: "Schreck"}, {firstname: "Dominic", lastname: "Destrait"}]
      .map(person => <PersonComponent firstname={person.firstname} lastname={person.lastname} />)

  return (
    <div className="App">
      { components }
    </div>
  );
}

export default App;
