import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Table from './Api/Table'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <Table/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;