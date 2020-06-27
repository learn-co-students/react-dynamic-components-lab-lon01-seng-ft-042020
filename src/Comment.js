import React, {Component} from 'react'



class Comment extends Component {

    render(){
        return(
 
            <div className="comment">
          {/* Uses the commentText prop
 passed to it from the BlogPost component */}
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;

