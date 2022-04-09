import React from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Button } from '../Button/Button';

export class Child extends React.Component {
  constructor(props) {
    super(props), (this.myRef = React.createRef());

    this.state = {
      count: 1,
    };
  }

  handleCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  componentDidMount() {
    this.myRef.current.addEventListener('click', (ev) => {
      console.log(ev.target);
    });
  }

  render() {
    return (
      <>
        <h2 ref={this.myRef}>Child Component</h2>
        <p ref={this.myRef}>{this.state.count}</p>
        <button onClick={this.handleCount}>Click-click</button>
      </>
    );
  }
}
