import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Child } from './components/Child/Child';
import { ChildFunc } from './components/ChildFunc/ChildFunc';

export class App extends React.Component {
  state = {
    count: 1,
    toggle: true,
    text: '',
    messageList: [],
  };

  handleCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  handleToggle = () => {
    this.setState((prevToggle) => ({ toggle: !prevToggle.toggle }));
  };

  handleSubmit = (ev) => {
    this.setState({
      messageList: [...this.state.messageList, this.state.text],
    });
    ev.preventDefault();
  };

  handleInputChange = (ev) => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <>
        <h1>Parent Component</h1>
        <p>{this.state.count}</p>
        {/* <Button click = {this.handleCount}></Button> */}
        <button onClick={this.handleToggle}>
          {this.state.toggle ? 'hide' : 'show'}
        </button>

        <hr />
        {this.state.toggle && <Child />}

        <hr />
        <h2>Function Component</h2>
        <ChildFunc numbnumber={this.state.count} />

        <hr />
        <form action="POST" onSubmit={this.handleSubmit}>
          <input type="text" onChange={(ev) => this.handleInputChange(ev)} />
          <button type="submit">Click!</button>
          <ul>
            {this.state.messageList.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </form>
      </>
    );
  }
  // const [count, setCount] = useState(1)
}
