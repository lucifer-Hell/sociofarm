import React from 'react'
import classes from './title.module.css'

export const Title=(props)=><div className={classes.Title} style={props.styleProp}>{props.children}</div>
export const SubTitle=props=><div className={classes.SubTitle} style={props.styleProp}>{props.children}</div>
export const Heading=props=><div style={props.styleProp}>{props.children}</div>
export const SubHeading=props=><div style={props.styleProp} >{props.children}</div>
export const Text=props=><div className={classes.Text} style={props.styleProp}>{props.children}</div>