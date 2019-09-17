import React from 'react';
import './Common.css';

/**
 * 公共组件
 */
class Common extends React.Component {

    render() {
        const {title} = this.props
        return (
            <div>
                <h3><strong>{title}</strong></h3>
            </div>
        )
    }
}

export default Common;