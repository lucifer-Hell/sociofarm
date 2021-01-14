import React, {Component }from 'react'

import * as tmImage from '@teachablemachine/image';
import {ImgUpload, SelectCrop,AnalyizingDisease,DiseaseAnalysis}from '../components/Dashboard/DiseaseDetectionModule/DiseaseAnalysis'

class DiseaseDetection extends Component{
    state={
        img:null,
        step:1,
        diseaseDetected:null,
        riskLevel:0,
        diseaseInformation:"Loose smut of barley is caused by Ustilago nuda. It is a disease that can destroy a large proportion of a barley crop. Loose smut replaces grain heads with smut, or masses of spores which infect the open flowers of healthy plants and grow into the seed, without showing any symptoms.",
        cropName:"",
        
    }

    uploadImage=(e)=>{
       const image=(e.target.files[0]);
       if(image==null)return;
       this.setState({...this.state,img:URL.createObjectURL(image),step:this.state.step+1},()=>this.detectDisease())
      
    }

    loadModel= async()=>{
        const URL="https://teachablemachine.withgoogle.com/models/qx4g68iy3/";
        const modelURL = URL + 'model.json';
        const metadataURL = URL + 'metadata.json';
        const model=tmImage.load(modelURL,metadataURL)
        return model;
    }

    incrementStep=async ()=>{
        this.setState({...this.state,step:this.state.step+1})
    }
    
    delayTime=(time)=>{
        setTimeout(()=>{
            console.log("waiting ..")
        },time)
    }

    detectDisease= async ()=>{
        //1 load the model
        const model =await this.loadModel()
        console.log("model loaded")
       
        let img=new Image();
        img.src=this.state.img;
        console.log(img.src)
        const predictions=await model.predict(img)
        console.log(predictions)
        //2 select the disease with max level
       
        let disease="";
        let riskLevel=0;
        predictions.forEach((prediction)=>{
            if(prediction.probability>riskLevel){
                disease=prediction.className;
                riskLevel=prediction.probability
            }
        })
        console.log(disease+" "+riskLevel)
        this.setState({...this.state,diseaseDetected:disease,riskLevel:riskLevel},()=>this.incrementStep())
        
    }

    body=()=>{
       switch(this.state.step){
        case 1 :
            return(
                <SelectCrop step={this.state.step} incrementStep={this.incrementStep.bind(this)} />
    
            )   
        
        case 2 :
            return(
                <ImgUpload step={this.state.step} uploadImage={this.uploadImage.bind(this)} />   
    
            )
            case 3:
                return (
                   <AnalyizingDisease img={this.state.img} step={this.state.step} />
                )
            case 4:
                return (
                    <DiseaseAnalysis diseaseDetected={this.state.diseaseDetected} riskLevel={this.state.riskLevel} diseaseInformation={this.state.diseaseInformation}  />
                  
                )
            default:return null

       }
        
             
    }

    render(){
        return(
            <div style={{display:"flex",width:"70%",height:"50%",justifyContent:"center",alignItems:"center"}} >
                
                {this.body()}
            </div>
        )
    }
}
export default DiseaseDetection