import React from 'react'
import classes from '../buttons/buttons.module.css'
console.log(classes)
export const ClickButton=(props)=><button className={classes.click} >{props.children}</button>