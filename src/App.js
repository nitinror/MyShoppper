import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    //BEM NAMING CONVENTION
    <div className="app">
      <Header/>
      <Home/>
      <checkout/>
      {/*Header */}
        {/*Home */}
    </div>
  );
}
export default App;
