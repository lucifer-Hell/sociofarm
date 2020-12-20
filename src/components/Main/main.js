import React,{Fragment} from 'react'
import classes from './main.module.css'
import {Title,SubTitle} from '../headings/title'
import FarmerLogo from '../Main/farmerLogo.svg'
import step from '../Main/step.svg'
import {ClickButton} from '../buttons/buttons'
const Main=()=>{

    return (
        <Fragment>
            <div className={classes.Main}>
            <div className={classes.fadeInLeft}>
                <Title >Sociofarm</Title>
                <SubTitle>
                Single Platform to solve all problems of  farmers
                </SubTitle>
            </div>
            <div>
                <img className={classes.fadeInRight}style={{paddingRight:"2em"}} src={FarmerLogo} alt="farmer Logo"></img>
            </div>
            </div>
            <div className={[classes.Main].join(' ')} style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}} >
                <Title styleProp={{textAlign:"center",paddingBottom:"1em"}}>How it Works ?</Title>
                <div>
                    <img  src={step} alt="step wise procedure "></img>
                </div>
                <div>
                <ClickButton>Click Here</ClickButton>
                </div>
                
            </div>
          
        </Fragment>
        
    )

}

export default Main;