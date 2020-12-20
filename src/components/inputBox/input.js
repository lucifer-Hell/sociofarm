import React from 'react'
import classes from './inputBox.module.css'
export const InputBox=(props)=><input className={classes.InputBox} style={props.styleProp} {...props.fieldProp} ></input>