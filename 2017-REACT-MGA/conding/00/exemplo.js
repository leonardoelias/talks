// Explicando o JSX

class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "span",
        null,
        "Logo"
      )
    );
  }
}

ReactDOM.render(React.createElement(Header, null), document.getElementById('root'));


class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Logo"
    );
  }
}

ReactDOM.render(React.createElement(Header, null), document.getElementById('root'));


class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          Logo
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
