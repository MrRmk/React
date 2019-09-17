import React from 'react'
import ThemeContext from '../theme-context'
import './ThemeBar.css';

/**
 * 样式区域
 */
const ThemeBar = () => {
    return (
        <ThemeContext.Consumer>
            {
                theme => {
                    console.log(theme)
                    return (
                        <div
                            className="alert mt-5"
                            style={ {backgroundColor: theme.bgColor,
                                color:theme.color
                            } }
                        >
                        样式区域：
                        <button className={theme.classnames}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}

export default ThemeBar