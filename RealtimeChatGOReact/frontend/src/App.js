import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { connect, sendMsg } from './api';
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello from react");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.send}>Send Message</button>
      </div>
    );
  }
}

export default App;
