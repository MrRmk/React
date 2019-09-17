import React from 'react';
import './NameCard.css';

/**
 * 1、属性是只读的，不能修改。
 * 2、所有的react组件必须像纯函数那样使用props
 * 
 * 人员卡片
 */

// 组件的函数写法
const NameCard = (props) => {
    const {name, telphone, isHuman, tags } = props
    return (
        <div className="alert alert-success">
            <h4 className="alert-heading">{name}</h4>
            <ul>
                <li>电话：{telphone}</li>
                <li>{ isHuman ? '人类' : '外星生物' }</li>
                <hr/>
                <p>
                    <lebel>好友印象：</lebel>
                    {tags.map((tag, index) => (
                        <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                    ))}
                </p>
            </ul>
        </div>
    )
}

//组件的类写法
// class NameCard extends React.Component {
//     render() {
//         const {name, telphone, isHuman, tags } = this.props
//         return (
//             <div className="alert alert-success">
//                 <h4 className="alert-heading">{name}</h4>
//                 <ul>
//                     <li>电话：{telphone}</li>
//                     <li>{ isHuman ? '人类' : '外星生物' }</li>
//                     <hr/>
//                     <p>
//                         {tags.map((tag, index) => (
//                             <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//                         ))}
//                     </p>
//                 </ul>
//             </div>
//         )
//     }
// }

export default NameCard