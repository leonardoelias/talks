import React, { Component } from 'react';

class Like extends Component {

    constructor(props) {
        super(props);

        this.state = { like: 0 };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();

        console.log(this.state.like);

        this.setState(prevState => ({
          like: prevState.like + 1
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <span class="licon icon-like"></span>
                <span>{this.state.like}</span>
            </button>
        );
    }
}

export default Like;
