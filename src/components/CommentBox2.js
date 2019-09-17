import React from 'react';
import './CommentBox2.css';

/**
 * 留言功能： 通过非受控组件来实现
 * 
 * 非受控组件 将真实数据保存在Dom中，更容易集成React和非React代码
 */
class CommentBox2 extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        alert(this.textInput.value)
        //阻止form上submit的默认行为
        event.preventDefault()
    }
    /**
     * ref接收一个回调函数
     */
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>留言内容</label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="请输入内容"
                        ref={ (textInput) => {this.textInput = textInput} }
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
            </form>
        )
    }

}

export default CommentBox2