import React, { Component } from 'react';

export default class ColorBox extends Component {
  state = {
    todos: [],
  };

  // renderColorBox = () => {
  //   if (this.props.opacity >= 0.2) {
  //     return <ColorBox />;
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    debugger;
    return (
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {/* this.renderColorBox()*/}
        {this.props.opacity >= 0.2 ? (<ColorBox opacity={this.props.opacity - 0.1} />) : null}
      </div>
    );
  }
}

// example ternary operator
// condition ? trueValue : falseValue
