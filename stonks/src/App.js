import './App.css';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
