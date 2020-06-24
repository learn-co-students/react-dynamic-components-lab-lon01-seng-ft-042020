import React, {Component} from 'react'


export default class Comment extends Component {
    render () {
        return(
            <div className="comment">
            {this.props.commentText}
            {/* <Comment /> */}
            </div>
        )
    }

}

// export default Comment;
