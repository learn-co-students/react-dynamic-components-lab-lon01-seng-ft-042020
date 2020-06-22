//your code here
import React, { Component } from 'react';

// export the class so it can be used in other files ???? DEFAULT??? line 5 or line 11
class Comment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}

export default Comment;