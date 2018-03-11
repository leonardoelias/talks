import React, { Component } from 'react';

import Like from '../Like'
import Comment from '../Comment'

class Post extends Component {
    constructor(props) {
      super(props);

      this.state = {
        comments: [],
        newCommentText: ' '
      };
    }

    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.newCommentText
                }
            ]
        })

        this.setState({ newCommentText: '' })

        e.preventDefault()
    }

    handleTextChange(e) {
        this.setState({
            newCommentText: e.target.value
        })
    }

    render() {
        return (
            <div className="Post">
                <div className="PostTitle">
                    <h4>{ this.props.title }</h4>
                    <div className="intro"> <a href="#">{ this.props.tag }</a> </div>
                </div>
                <div className="PostInfo">
                    { this.props.text }
                    <a href="#">Read Article<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="PostFooter">
                    <Like />
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input
                            value={this.state.newCommentText}
                            onChange={(event) => this.handleTextChange(event)}
                        />
                        <button type="submit">Comentar</button>
                    </form>
                    {
                        this.state.comments.map((comment, index) => {
                            return <Comment text={comment.text} />
                        })
                    }
                </div>
                <div className="PostOverlay"></div>
            </div>
        );
    }
}

export default Post;
