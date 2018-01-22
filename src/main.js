"use strict" //Master Component
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Child from './child'
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Hello World!!</h1>
        <Child />
      </div>
    );
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById("app")
)
