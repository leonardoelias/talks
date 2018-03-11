import React, { Component } from 'react';

import Header from './componets/Header';
import Post from './componets/Post';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Leonaro Lindo" subtitle="Front-End Developer" />
        <Post title="My first react." tag="Cat" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" />
        <Post title="ANOTHER   BORING DAY." tag="Cat" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" />
        <Post title="ANOTHER BORING DAY." tag="Cat" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" />
        <Post title="ANOTHER BORING DAY." tag="Cat" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" />
      </div>
    );
  }
}

export default App;
