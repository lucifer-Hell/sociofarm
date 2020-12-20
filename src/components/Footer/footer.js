import React from 'react'
import { SubTitle } from '../headings/title'
import classes from './footer.module.css'
import {Text} from '../headings/title'
const Footer =(props)=>{
    return (
        <div className={classes.footer}>
           
                <SubTitle styleProp={{width:"50%"}}>About Us</SubTitle>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text styleProp={{fontSize:"1.0em",color:"grey"}}>Sociofarm All Copyrights reserved &copy; 2020</Text>
        </div>
    )
}
export default Footer;