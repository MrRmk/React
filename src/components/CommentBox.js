import React from 'react';

/**
 * 留言功能： 通过受控组件来实现
 * 
 */
class CommentBox extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        alert(this.state.value)
        //阻止form上submit的默认行为
        event.preventDefault()
    }
  
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>留言内容(受控组件)</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="请输入内容"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
            </form>
        )
    }

}

export default CommentBox