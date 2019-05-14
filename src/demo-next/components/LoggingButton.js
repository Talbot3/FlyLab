import React from 'react';

export default class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = (id, e) => {
    console.log(id,e, 'this is:', this);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(3, e)}>
        Click me
      </button>
    );
  }
}
