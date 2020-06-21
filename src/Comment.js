import React, { Component } from 'react'
import classes from './index.css';
import { ElementClass } from 'enzyme';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment