import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  checkChar() {
    return this.state.text.length >= 6;
  }

  checkLower() {
    let reg = /[a-z]/;
    return reg.test(this.state.text);
  }

  checkUpper() {
    let reg = /[A-Z]/;
    return reg.test(this.state.text);
  }

  finalCheck() {
    return this.checkUpper() && this.checkLower() && this.checkChar();
  }

  render() {
    return (
      <div className="app">
        <input
          type="text"
          placeholder="username"
          onChange={(event) => this.handleChange(event)}
        />
        <div className="rules">
          <ul>
            <li className={this.checkLower() ? "passed" : "missing"}>
              1 lowercase character
            </li>
            <li className={this.checkUpper() ? "passed" : "missing"}>
              1 uppercase character
            </li>

            <li className={this.checkChar() ? "passed" : "missing"}>
              6 minimum characters
            </li>
          </ul>
        </div>
        <button disabled={this.finalCheck() ? false : true}> Submit </button>
      </div>
    );
  }
}

export default App;
