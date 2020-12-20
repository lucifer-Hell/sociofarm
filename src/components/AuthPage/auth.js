import React from 'react'
import classes from '../AuthPage/auth.module.css'
import {Title ,Text}from '../headings/title'
import {ClickButton }from '../buttons/buttons'
import { InputBox } from '../inputBox/input'

const Auth=()=>{

    return (
        <div className={classes.authBoard}>
            <Title styleProp={{fontSize:"60px",marginBottom:"3%"}}>Log In</Title>
            <div style={{display:"flex",flexDirection:"row",justifyContent:'space-evenly',width:"100%",marginBottom:"1%"}}><Text>Username :</Text><InputBox /></div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:'space-evenly',width:"100%",marginBottom:"1%"}}><Text>Password :</Text><InputBox styleProp={{type:"password"}} fieldProp={{type:"password"}} /></div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',width:"50%"}}>
               <ClickButton styleProp={{width:"30%",display:"inline",fontSize:"18px"}}>Log In</ClickButton> 
                <ClickButton styleProp={{width:"50%",display:"inline",fontSize:"18px"}}>Forgot Password</ClickButton> 
            </div>
            <Title styleProp={{fontSize:"40px",margin:"0",padding:"0"}}>OR</Title>
            <ClickButton styleProp={{fontSize:"30px",margin:"1em    ",padding:"0"}}>Sign Up</ClickButton> 
        </div>
    )
}
export default Auth;