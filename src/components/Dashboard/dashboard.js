import React from 'react'
import classes from './css/dashboard.module.css'
import Auth from '../AuthPage/auth'

const Dashboard=(props)=>{
    return (
        <div className={classes.dashboard}>
          <Auth />
        
        </div>
    )
}

export default Dashboard;