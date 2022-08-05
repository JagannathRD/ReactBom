import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';
import React from 'react';

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


const FormComponent=()=>{
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
const[ecr,setEcr]=React.useState()
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return(<>
    
          
          <form>
        <div>
       <TextField id="standard-basic" label="ECR No" variant="standard" value={ecr} onChange={(e)=>setEcr(e.target.value)} />
       <TextField id="standard-basic" label="Customer" variant="standard" value={customer} onChange={(e)=>setCustomer(e.target.value)}/>
       <TextField id="standard-basic" label="Project" variant="standard" value={project} onChange={(e)=>setProject(e.target.value)}  />
       </div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-BomType-native-simple" style={{color:'#2e3033'}}>Gear type</InputLabel>
        <Select
          native
          value={bomType}
          onChange={(e)=>setBomType(e.target.value)}
          inputProps={{
            name: 'BomType',
            id: 'filled-BomType-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"EPSapa"}>EPSapa</option>
          <option value={"EPSdp"}>EPSdp</option>
          <option value={"EPSp"}>EPSp</option>
        </Select>
        
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
      <InputLabel htmlFor="filled-SteeringType-native-simple" style={{color:'#2e3033'}}>Steering type</InputLabel>
        <Select
          native
          value={steering}
          onChange={(e)=>setSteering(e.target.value)}
          inputProps={{
            name: 'steering',
            id: 'filled-SteeringType-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"LongSteering"}>Long Steering</option>
          <option value={"ShortSteering"}>Short Steering</option>
          
        </Select>
      </FormControl> 
            </form>

      
    
    </>)
}
export default FormComponent