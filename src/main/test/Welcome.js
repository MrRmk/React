import React from 'react';

class Welcome extends React.Component {
    render() {
        const todoList = ['Learn React', 'Learn Redux', 'Learn Mobx'];
        const isLogin = true;
        const test = <h1> Hello React </h1>;
        console.log(test);
        return (
            <div className="this" htmlFor="">
                <h1> Hello React </h1>
                <div>{'wink'} {10 + 30}</div>
                <p>{[1,2,3]}</p>
                <ul>
                    {
                        todoList.map( item =>
                            <li>{item}</li>
                        )
                    }
                </ul>
                {isLogin ? <p>你已经登录</p> : <p>请登录</p>}
            </div>
        )
    }
}

export default Welcome