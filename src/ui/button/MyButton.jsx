import React from 'react'
import classes from '../button/MyButton.module.css'
const MyButton = ({children, props}) => {
    return (
        <button className={classes.percentBtn} {...props}>{children}</button>
    )
}

export default MyButton