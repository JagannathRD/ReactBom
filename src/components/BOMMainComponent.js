import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Grid, TextField } from '@material-ui/core';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';


import BOMDragDrop from './BOMDragDrop';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { red } from '@mui/material/colors';
//import FormComponent from '../services/FormComponent';

const Input = styled('input')({
  display: 'none',
});


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
const[changeNo,setChangeNo]=useState('')
const[bomNo,setBomNo]=useState('')
const[customer,setCustomer]=useState('')
const[project,setProject]=useState('')
const[bomType,setBomType]=useState('')
const[gearType,setGearType]=useState('')
const[check,setCheck]=useState(false)
const[deactivation,setDeactivation]=useState('')


const content ={changeNo,bomNo,customer,project,gearType,bomType,check,deactivation}
console.log(check)
    return (
    
    <div class='parent'>
        
 <div class='child' >
<Grid container>
    
<form >
  
  <div  >
      <Grid item lg={8}>
        <div style={{position:'absolute',left:'100px',top:'150px'}}>
          <TextField id="standard-basic" label="Change No" variant="standard" value={changeNo} 
           onChange={(e)=>setChangeNo(e.target.value)} required />&nbsp;
                
          <TextField id="standard-basic" label="BOM No" variant="standard" value={bomNo} 
          onChange={(e)=>setBomNo(e.target.value)} required/>&nbsp;
          <TextField id="standard-basic" label="Customer" variant="standard" value={customer} 
          onChange={(e)=>setCustomer(e.target.value)}/>&nbsp;
          <TextField id="standard-basic" label="Project" variant="standard" value={project}
           onChange={(e)=>setProject(e.target.value)}  />&nbsp;
        </div>
      </Grid>  
      <Grid lg={4}>
        <p style={{position:'relative', left:'500px',top:'-30px',lineHeight:'0px'}}>
       
          <FormControlLabel
          label="Deactivation of NES Structure"
          variant="outlined"
          control={<Checkbox  />}
          value={check} onChange={(e)=>setCheck(e.target.checked)}/>
          
        </p>
        
        {check===true?<TextField style={{position:'absolute', left:'1170px',width:'absolute',top:'220px'}}
           id="outlined-multiline-static"
          value={deactivation}
          label="Reason for deactivation"
          onChange={e=>setDeactivation(e.target.value)}
         // placeholder="Reason for deactivation"
          multiline
          rows={1}
          
          variant='outlined'
          />:null}
      </Grid>
        {/* </div> */}
  </div>
  <div>
  
       </div>
       <div style={{position:'absolute',left:'90px',top:'210px'}}>
          <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-BomType-native-simple" style={{color:'#2e3033'}} required>Gear type</InputLabel>
        <Select
          native
          value={gearType}
          onChange={(e)=>setGearType(e.target.value)}
          inputProps={{
            name: 'BomType',
            id: 'filled-BomType-native-simple',
          }}>
          <option aria-label="None" value="" />
          <option value={"EPSapa"}>EPSapa</option>
          <option value={"EPSdp"}>EPSdp</option>
          <option value={"EPSp"}>EPSp</option>
        </Select>
          </FormControl>

          <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-SteeringType-native-simple" style={{color:'#2e3033'}} required>BOM Structure</InputLabel>
        <Select
          native
          value={bomType}
          onChange={(e)=>setBomType(e.target.value)}
          inputProps={{
            name: 'steering',
            id: 'filled-SteeringType-native-simple',
          }}>

          <option aria-label="None" value="" />
          <option value={"Long steering gear (short gear + steering gear output)"}>Long steering gear (short gear + steering gear output)</option>
          <option value={"Short steering gear with / without steering gear output"}>Short steering gear with / without steering gear output</option>
          
        </Select>
            </FormControl> 
  </div>
       
</form>
</Grid>
      </div>
      <div style={{position:'relative',top:'80px'}}>
      <BOMDragDrop  content={content}/>
      
      </div>
      </div>
   
  );

}
