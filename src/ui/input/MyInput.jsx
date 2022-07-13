import React from 'react'
import classes from '../input/MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.billBtn} {...props} />
    )
}

export default MyInput