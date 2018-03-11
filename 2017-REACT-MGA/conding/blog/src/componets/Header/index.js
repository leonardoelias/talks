import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__title">
          { this.props.title }
          <span>{ this.props.subtitle }</span>
        </h1>
      </header>
    );
  }
}

export default Header;
