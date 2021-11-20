import React from 'react';

function login() {
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
  
  export default login;