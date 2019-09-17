import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemeBar';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox2 from './components/CommentBox2';
import CommentList from './components/comment/CommentList';
import CommentBox from './components/comment/CommentBox';
import Common from './components/common/Common';


const tags = ['体育健将', '足球小子']
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  },
}

class App extends Component {

  //构造函数
  constructor(props) {
    super(props)
    
    
  }

  //在渲染前调用,在客户端也在服务端。
  componentWillMount(){
    this.state = {
      comments: ['this is my first reply'],
      inputValue: "",
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    // this.changeTheme = this.changeTheme.bind(this)
  }

  // 在第一次渲染后调用，只在客户端
  componentDidMount(){
    
  }

  //留言列表添加留言内容
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
    console.log("App.js addComment() comments: " + this.state.comments)
  }

  //删除留言
  delComment(index) {
    let list = [...this.state.comments]
    list.splice(index, 1)
    this.setState({
      comments: list
    })
    console.log("App.js delComment() comments: " + this.state.comments)
  }

  //样式改变调整
  changeTheme(theme){
    this.setState({
      theme
    })
  }

  render() {
    const { comments }  = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            {/* <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a>
             */}
            <a href="#theme-switcher" className="btn btn-light" onClick={ () => {this.changeTheme('light')}} >浅色主题</a>
            <a href="#theme-switcher" className="btn btn-secondary" onClick={ () => {this.changeTheme('dark')}} >深色主题</a>
          </header>
          <div>
            <Common title="Context: 示例 - 样式选择" />
            <ThemeBar />
            <hr />
          </div>
          {/* <div className="test"><h3>123</h3></div> */}
          <div>
            <Common title="Props: 示例 - 名片" />
            <NameCard name="King" telphone={18279172323} isHuman tags={tags} />
            <hr />
          </div>
          <div>
            <Common title="Stete: 示例 - 点赞按钮" />
            <LikesButton />
            <hr />
          </div>
          <div>
            <Common title="生命周期: 示例 - 电子钟表" />
            <DigitalClock />
            <hr />
          </div>
          <div>
            <Common title="表单: 示例 - 留言框" />
            <CommentBox2 />
            <hr />
          </div>
          <div className="div-item-bottom">
            <Common title="综合例子: 留言板" />
            <CommentList onDelComment={this.delComment.bind(this)}  comments={comments} />
            <CommentBox 
              commentsLength={comments.length}
              onAddComment={this.addComment}
              inputValue={this.state.inputValue} 
               />
            <hr />
          </div>

        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
