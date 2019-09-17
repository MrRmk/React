import React from 'react';
import './DigitalClock.css';

/**
 * 时钟
 */
class DigitalClock extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            date: new Date()
        }
    }
    /**
     * （装载完成），在render之后调用
     *  render之后并不会立即调用，而是所有的子组件都render完之后才可以调用
     *  只能在浏览器端被调用，在服务器端使用react的时候不会被调用
     */
    componentDidMount(){
        //设置一个定时器timer
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    
    /**
     * 更新
     * @param {*} currentProps      当前的props
     * @param {*} currentState      当前的state
     */
    componentDidUpdate(currentProps, currentState) {
        //console.log(currentState)
    }

    /**
     * 组件将要卸载时调用
     */
    componentWillUnmount() {
        //删除定时器timer
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="digital-clock-component jumbotron">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

}

export default DigitalClock