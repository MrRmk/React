import React from 'react';
import './LikesButton.css'

/**
 * 点赞按钮
 */
class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        //this.increaseLikes = this.increaseLikes.bind(this)
        //onClick= { this.increaseLikes } 
    }
    increaseLikes() {
        let num = this.state.likes;
        this.setState({
            likes: num + 1
        })
    }
    render() {
        return (
            <div className="likes-button-component">
                <button 
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={ () => { this.increaseLikes() } }
                >
                    点赞{this.state.likes}
                </button>
            </div>
        );
    }
}

export default LikesButton;