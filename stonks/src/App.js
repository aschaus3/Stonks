import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <div className="stonk-container">
          <div className="stonk">
              <h1>Fav Stonks</h1>
          </div>

          <div className="stonk">
              <h1>Top Stonks</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;