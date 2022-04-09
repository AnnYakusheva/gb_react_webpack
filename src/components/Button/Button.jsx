import React from 'react';

export class Button extends React.Component {
  handleClick = () => {
    this.props.click;
  };
  render() {
    console.log('button');
    return <button onClick={this.handleClick}>Click</button>;
  }
}
