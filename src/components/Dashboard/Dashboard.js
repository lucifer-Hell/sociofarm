import React from 'react'

import classes from './css/dashboard.module.css'


const Dashboard=(props)=>{
    return (
        <div className={classes.dashboard}>
              {props.children}
        </div>
    )
}

export default Dashboard;