import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import './SignApp.css'
import "./sigCanvas.css";
import { Grid } from "@material-ui/core";
import {  TextField } from '@material-ui/core';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

function SignComponent() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (

    <div className="SignApp">
      <Grid container lg={12} spacing={2} >
      
       

        <Grid item lg={2}>
          <TextField id="standard-basic" label="Change No" variant="standard"  required />&nbsp;
          </Grid> 
          <Grid item  lg={2}>
          <TextField id="standard-basic" label="BOM No" variant="standard"  required/>&nbsp;
          </Grid>
          <Grid item  lg={2}>
          <TextField id="standard-basic" label="Customer" variant="standard" />&nbsp;
          </Grid>
          <Grid item  lg={2}>
          <TextField id="standard-basic" label="Project" variant="standard"   />&nbsp;
          </Grid>

        <Grid item  lg={4}>
        <p  style={{position:'relative',left:'150px'}}>
       
          <FormControlLabel 
          label="Deactivation of NES Structure"
          variant="outlined"
          control={<Checkbox  />}
/>
          
        </p>
        
        <TextField style={{width:'absolute',top:'10px',left:'150px'}}
           id="outlined-multiline-static"
          
          label="Reason for deactivation"
 
         // placeholder="Reason for deactivation"
          multiline
          rows={1}
          
          variant='outlined'
          />
          </Grid>
      </Grid>
      <h1>Signature Pad Example</h1>
      <Popup
        modal
        trigger={<button>Open Signature Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />
            {/* Button to trigger save canvas image */}
            <button onClick={save}>Save</button>
            <button onClick={clear}>Clear</button>
            <button onClick={close}>Close</button>
          </>
        )}
      </Popup>
      <br />
      <br />
      {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
        />
      ) : null}
    </div>
  );
}

export default SignComponent;
