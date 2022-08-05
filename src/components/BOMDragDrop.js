
import { DropzoneArea } from "material-ui-dropzone";
import { Box, Chip, CircularProgress, Grid, IconButton, Slide, Snackbar, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import React, { useState } from "react";
import React, {useCallback,useMemo,useState,useEffect } from 'react'
import {useDropzone} from 'react-dropzone'
import * as XLSX from "xlsx";
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button';
import { Link, Route, BrowserRouter, Routes ,useNavigate} from "react-router-dom";
import CompareView from "./CompareView";




const useStyles = makeStyles(theme => ({
  deleteIcon: {
    '& .MuiChip-deleteIcon': {

    }, '&:hover': {
      color: 'var(--bs-red)', 
    },
  }
}));
function convertToJson(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");
    for (var j=0;j<headers.length;j++) { 
    if(headers[j]=='Explosion level'||headers[j]=='Item Number'||headers[j]=='Component number'||headers[j]=='Object description'||headers[j]=='Component quantity'||headers[j]=='Comp. Qty (CUn)'
    ||headers[j]=='Component unit'||headers[j]=='Item category')
    {
      obj[headers[j]] =currentline[j];
      }} 

    result.push(obj)
  }

  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
  
}

const FileUpload = (props) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [fileInfos, setFileInfos] = useState([]);

  let navigate=useNavigate()
  let target=props.content
  const postData=()=>{
    target.bomData=BOMJsondata
    var obj=JSON.stringify(target)
  
    console.log(obj)
    
    fetch('http://localhost:8080/post',{
    method:'post',
    headers:{'content-Type':'application/json'},
    body:obj
  
    })
   

    const condition={state:props.content}
    const compareStatus=true
    if(compareStatus==true)
    navigate('/compare',condition)
    else
    navigate('/compareView',condition)

  }

  const compareData = (event) => {
    event.preventDefault();
    
   
  console.log(props.content.changeNo)
  if(target.changeNo==''||target.changeNo.trim().length===0){
  alert("'change No can't be empty'")
  }
  else if(target.bomNo==''||target.bomNo.trim().length===0){
    alert("'BOM No can't be empty'")
    }
    else if(target.gearType==''){
      alert("'GearTypecan't be empty'")
      }
      else if(target.bomType==''){
        alert("'BOM Structure can't be empty'")
        }
  else if((target.changeNo!=''&&target.bomNo!=''&&target.gearType!=''&&target.bomType!='')){
      console.log('ll blnk')
      postData()
  }
  
  }
  
  var BOMJsondata;
  const onDrop = async (files) => {
    files.forEach((file) => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
    // Do whatever you want with the file contents
      const bstr  = reader.result
      //console.log(binaryStr.toString)
      const wb = XLSX.read(bstr, { type: "binary" });
    /* Get first worksheet */
     const wsname = wb.SheetNames[0];
     const ws = wb.Sheets[wsname];
     /* Convert array of arrays */
     const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
     /* Update state */
    console.log("Data>>>" + data);
     //console.log(convertToJson(data));
     BOMJsondata=convertToJson(data);
     //return convertToJson(data);
      }
      reader.readAsArrayBuffer(file)
    })
  
}


return( <><DropzoneArea
  //showPreviews={false}
  //showPreviewsInDropzone={false}
  // useChipsForPreview
  previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
  // previewChipProps={{classes: { root: classes.previewChip } }}
  previewText="Files"
  //getPreviewIcon={(file) => { handlePreviewIcon(file) }}
  //acceptedFiles={['image/*', 'xlsx']}
  onChange={onDrop}
  //onDelete={onDeleteFunc}
  // showFileNames
  //initialFiles={fileInfos}
  dropzoneText="Upload BOMs which needs to be compared"
  showAlerts={true}
  filesLimit={1}
  //dropzoneProps={{ disabled: props.currentLesson.status === 'Released' && !props.userData.cpcPermissionList.includes('MANAGE_ROLE') }}
/>
<div style={{padding:'30px 5px 5px 5px'}}></div>

<div style={{position:'relative',top:'10px'}}>
        <Button  onClick={compareData} style={{backgroundColor:'minor accent',width:'200px',height:'50px'}} variant="contained" color="primary" >
            Compare BOM
        </Button>
           
</div>  
</>
)
}

export default FileUpload;