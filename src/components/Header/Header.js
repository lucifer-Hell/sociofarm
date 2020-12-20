import React,{Fragment,useState} from 'react'
import logo from './logo.svg'
import backArrow from './backArrow.svg'
import menuIcon from './menuIcon.svg'
import classes from './header.module.css'

const Header=()=>{
    // console.log(classes)
   const btnClass=[classes.button]
   const [sideMenuState,sideMenuStateToggle]=useState({sideMenuVisible:false})
//    btnClass.push()
   const sideMenuContent=(sideMenuState.sideMenuVisible)?
    (<div className={classes.sideMenu}>
            <button  onClick={()=>{toggleSideMenu()}}  className={classes.sideMenuOptions}>
            <img className={classes.backArrow}  alt ="logo" src={backArrow} ></img> back</button>
            <button className={classes.sideMenuOptions} >Home</button>
            <button className={classes.sideMenuOptions} >Log In</button>
            <button className={classes.sideMenuOptions} >Sign Up</button>
            <button className={classes.sideMenuOptions} >Contact Us</button>
    </div>)
    :(<div onClick={()=>{toggleSideMenu()}} className={classes.sideBar}><img className={classes.sideMenuIcon} alt="sideMenuIcon" src={menuIcon}></img></div>)
    
    const toggleSideMenu=()=>{
        let prevState=sideMenuState.sideMenuVisible
        sideMenuStateToggle({sideMenuVisible:!prevState})
    }

   return (
       <Fragment>
           {/* main menu */}
            <div className={classes.header}>
                <span className={classes.leftHeader}>
                <img className={classes.logo}  alt ="logo" src={logo} ></img>
                <span className={classes.title}>Sociofarm</span>
                </span>
                <menu className={classes.menu}>
                    <button className={btnClass.join(' ')}>Home</button>
                    <button className={btnClass.join(' ')}>Log In</button>
                    <button className={btnClass.join(' ')}>Sign Up</button>
                    <button className={btnClass.join(' ')}>Contact Us</button>
                </menu>
            </div>
            {/* side menu */}
            {sideMenuContent}
       </Fragment>
      
    )
}
export default Header;