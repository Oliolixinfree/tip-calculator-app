import React from 'react'
import classes from '../reset-button/ResetButton.module.css'

const ResetButton = ({props, children}) => {
    return (
        <button className={classes.reset} {...props}>{children}</button>
    )
}

export default ResetButton