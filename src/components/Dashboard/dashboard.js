import React from 'react'
import { Title } from '../headings/title'
import classes from './css/dashboard.module.css'
import DiseaseAnalysis from './DiseaseAnalysis'


const Dashboard=(props)=>{
    return (
        <div className={classes.dashboard}>
          <Title styleProp={{fontSize:"4em",color:"black"}}>Disease Analysis</Title>
          <DiseaseAnalysis />
        </div>
    )
}

export default Dashboard;