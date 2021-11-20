import React from 'react';
import './App.css';

import Table from './Api/Table'
import Header from './Header/Header'
import Footer from './Footer/Footer'

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