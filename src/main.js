import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <h1 className="text-center">Hello World!!</h1>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById("app")
)
