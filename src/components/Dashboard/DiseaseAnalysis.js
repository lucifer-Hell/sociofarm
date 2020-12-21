import React from 'react'
import { ClickButton } from '../buttons/buttons'
import { Title,Text,SubTitle } from '../headings/title'
import classes from './css/diseaseAnalysis.module.css'
const DiseaseAnalysis=()=>{
    return (
        
        <div className={classes.board}>
             <div className={classes.indicator}> 
             <div style={{marginTop:"3%",display:"flex",flexDirection:"column",justifyContent:"flex-end",border:"2px solid black",borderRadius:"5%",height:"80%",width:"10%",padding:"0"}}>
                <div style={{backgroundColor:"orange",height:"50%"}}></div>
             </div>
             <div><Title styleProp={{fontSize:"1.8em"}}>Risk Level: Medium</Title></div>
             </div>
             <div className={classes.details}>
                <Title styleProp={{fontSize:"40px"}}>Disease Detected</Title>
                <div className={classes.report}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",width:"70%"}} >
                        <SubTitle styleProp={{fontSize:"35px",fontWeight:"4em",textAlign:"center"}}>Wheat Sumt </SubTitle>
                        <Text styleProp={{marginLeft:"1%",fontSize:"20px"}}>Loose smut of barley is caused by Ustilago nuda. It is a disease that can destroy a large proportion of a barley crop</Text>
                        <ClickButton styleProp={{marginLeft:"1%",fontSize:"20px",backgroundColor:"#93E79B"}}>View Solution</ClickButton>
                    </div>
                    <div>
                       <img src={"https://m.farms.com/Portals/0/loose-smut-300-1_1.png"} style={{width:"70%",height:"70%",borderRadius:"100%"}} alt="wheat smut"></img>
                    </div>
                </div>
                
               
             </div>
        </div>
    )
}
export default DiseaseAnalysis