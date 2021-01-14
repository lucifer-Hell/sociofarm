import React from 'react'
import { ClickButton } from '../../buttons/buttons'
import { Title,Text,SubTitle } from '../../headings/title'
import {LoadingBar} from '../../loadingIcon/loadingIcon'
import classes from './css/diseaseAnalysis.module.css'


export  const DiseaseAnalysis=(props)=>{
    props=(props==null)?{riskLevel:0,diseaseDetected:"loading",diseaseInformation:"loading.."}:props;
    const riskLevel=props.riskLevel;
    const color=(riskLevel)=>{
        if(riskLevel<40)return "green"
        else if (riskLevel>40 && riskLevel<65)return "orange"
        else if(riskLevel>65)return "red"
    }
    return (
        
        
        <div className={classes.board}>
             <div className={classes.indicator}> 
             <div style={{marginTop:"3%",display:"flex",flexDirection:"column",justifyContent:"flex-end",border:"2px solid black",borderRadius:"5%",height:"80%",width:"10%",padding:"0"}}>
                <div style={{backgroundColor:color(riskLevel*100),height:[riskLevel*100,"%"].join('')}}></div>
             </div>
             <div><Title styleProp={{fontSize:"1.8em"}}>Risk Level: {Math.ceil(riskLevel*100)}%</Title></div>
             </div>
             <div className={classes.details}>
                <Title styleProp={{fontSize:"40px"}}>Disease Detected</Title>
                <div className={classes.report}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",width:"70%"}} >
                        <SubTitle styleProp={{fontSize:"35px",fontWeight:"4em",textAlign:"center"}}>{props.diseaseDetected} </SubTitle>
                        <Text styleProp={{marginLeft:"1%",fontSize:"20px"}}>{props.diseaseInformation}</Text>
                        <ClickButton style={{marginLeft:"1%",fontSize:"20px",backgroundColor:"#93E79B"}}>View Solution</ClickButton>
                    </div>
                    <div>
                       <img src={"https://m.farms.com/Portals/0/loose-smut-300-1_1.png"} style={{width:"70%",height:"70%",borderRadius:"100%"}} alt={props.diseaseDetected}></img>
                    </div>
                </div>
                
               
             </div>
        </div>
    )
}
export const SelectCrop=(props)=>{
    return (
        <div className={classes.board}>
                
            <div className={classes.details}>
            <Title styleProp={{fontSize:"40px"}}>Step:{props.step} Select your Crop</Title>
            <div className={classes.report}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",width:"70%"}} >
                    <ClickButton style={{marginLeft:"1%",fontSize:"20px",backgroundColor:"#93E79B"}} onClick={props.incrementStep}>Wheat</ClickButton>
                </div>
                
            </div>
            
            
            </div>
        </div>
    )
}
export const ImgUpload =(props)=>{
    return (
        
             <div className={classes.details}>
                <Title styleProp={{fontSize:"40px"}}>Step:{props.step} Upload Image</Title>
                <div className={classes.report}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",width:"70%"}} >
                        <SubTitle styleProp={{fontSize:"35px",fontWeight:"4em",textAlign:"center"}}>Upload only JPG/PNG File (MAX:3MB) </SubTitle>
                        <ClickButton style={{marginLeft:"1%",fontSize:"20px",backgroundColor:"#93E79B"}} ><input type="file" name="file" id="file" style={{width:"0px",height:"0px",visibility:"hidden"}} onChange={(e)=>{props.uploadImage(e)}}></input><label htmlFor="file">Upload</label></ClickButton>
                    </div>
     
                </div> 
            </div>
       
    )

}

export const AnalyizingDisease=(props)=>{
    return (
        
        <div className={classes.details}>
           <Title styleProp={{fontSize:"40px"}}>Step:{props.step} Analayzing the image</Title>
           <img src={props.img} alt="testing" style={{width:"40%",height:"40%"}} ></img>
           <LoadingBar />
           
       </div>
  
)
}