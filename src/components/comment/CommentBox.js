import React from 'react';

/**
 * 留言框
 * 
 * 留言功能： 通过非受控组件来实现
 * 
 * 非受控组件 将真实数据保存在Dom中，更容易集成React和非React代码
 */
class CommentBox extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            inputVal: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        //添加评论
        this.props.onAddComment(this.textInput.value)
        //清空输入框
        this.textInput.value=""
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
                <p>已有{this.props.commentsLength}条留言</p>
            </form>
        )
    }

}

export default CommentBox