import logo from './logo.svg';
import './App.css';
import Incrementor from './components/Incrementor';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.n = 'test !!!!!!!!!!!!';

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.n}
          </p>
          <Incrementor name="Incrementor">Je suis incrementor et je suis très méchant !!</Incrementor>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
