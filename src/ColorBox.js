import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = { todos: [ ] }

  // Takes in a single props called opacity from App components 
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity }}>

      {/* If the opacity value is less than 0.2 render null,
      otherwise recursively render another ColorBox 
      with an opacity prop that's reduced by 0.1 */}
      {this.props.opacity < 0.2 ? null: <ColorBox opacity = {this.props.opacity - 0.1}/> }

      {/* As props are read-only, you cant use -= on them, you can only use -  */}
      
      </div>
    ) } }

