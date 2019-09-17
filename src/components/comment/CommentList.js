import React from 'react';
import './CommentList.css';

// const CommentList = ({ comments }) => {

/**
 * 留言列表
 */
class CommentList extends React.Component{

    state = {
        comments: []
    }

    constructor(props) {
        super(props);
    }

    /**
     * 在渲染前调用,在客户端也在服务端。
     */
    componentWillMount(){
        this.setState({
            comments: this.props.comments,
        })
        this.onDelComment = this.onDelComment.bind(this)
        console.log("CommentList.js  componentDidMount() comments：" + this.state.comments)
    }

    /**
     * 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
     * @param {*} nextProps 
     */
    componentWillReceiveProps(nextProps){

        if( this.props.comments !== nextProps.comments ) {
            if( nextProps.comments ) {
                this.setState({
                    comments: nextProps.comments,
                })
            }
        }
        console.log("CommentList.js  componentWillReceiveProps() comments1：" + this.state.comments)
        console.log("CommentList.js  componentWillReceiveProps() comments2：" + nextProps.comments)
    }

    onDelComment(index){
        this.props.onDelComment(index)
        console.log("CommentList.js  onDelComment() comments：" + this.state.comments)
    }

    render() {
        return (
            <div className="comment-list-component">
                <label>留言列表</label>
                <ul className="list-group mb-3">
                    {
                        this.state.comments.map( (comment, index) => 
                        // comments.map( (comment, index) => 
                            <li key={index} className="list-group-item">
                                <div>{comment}</div>
                                <button onClick={ () => {this.props.onDelComment(index)} } className="btn btn-danger">删除</button>
                                
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default CommentList