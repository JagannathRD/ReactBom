import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bom from '../Data/bom.json'
import Bosch from './images/Bosch.PNG'
import jsPDF from 'jspdf';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@material-ui/core/Button';
import "jspdf-autotable";
import HeaderComponent from './HeaderComponent';
import { useLocation,useNavigate } from 'react-router-dom';
import webhome from './images/webhome.png'
import missingData from '../Data/MissingData.json'
 




const rows = bom.bomData


function BasicTable() {
  return (
    <div style={{marginLeft:'30px',marginRight:'30px'}}>
    <TableContainer component={Paper} sx={{  maxHeight:'500px',overflow:'auto' }}>
      <Table  aria-label="simple table" id='ty'>
        <TableHead style={{position:'sticky',top:'0',background:'#eee'}}>
          <TableRow>
            <TableCell>Explosion Level</TableCell>
            <TableCell  align='left'>Item No</TableCell>
            <TableCell >Component No</TableCell>
            <TableCell >Object Description</TableCell>
            <TableCell >Component Quantity</TableCell>
            <TableCell >Component Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  scope="row">
                {row.expLevel}
              </TableCell>
              <TableCell >{row.itemNumber}</TableCell>
              <TableCell>{row.componentNumber}</TableCell>
              <TableCell >{row.objectDesc}</TableCell>
              <TableCell >{row.compQty}</TableCell>
              <TableCell >{row.componentUnit}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
console.log(Object.values(rows).map(i=>
  <>{i}</>
  ))

export default function Compare() {
  const {state}=useLocation()
  const {check,deactivation}=state
  console.log(check+" "+deactivation+" "+state)
  console.log(state)
  const print=()=>{
    const pdf= new jsPDF();
    const img= new Image();
    img.src=Bosch
    pdf.addImage(img,'png',150,5)
    const date= new Date().toLocaleString()  
    pdf.setFontSize(10)
    pdf.text(10,25, '   From             '+"                "+" Our Reference      "+"           "+" Tel           "+"                "+ " Date")
    pdf.setFontSize(12)
    pdf.text(10,30, '  AS/EDM-P'+"     "+" Thorsten Kickmaier "+" "+" +49717131-8596"+"    "+date)
    pdf.setFontSize(18)
    pdf.text(15,50,'BOM Comparison Report')
      
                  let column=[['Customer :',missingData.customer],['Project :',missingData.project],['Change No :',missingData.changeNo],
                  ['NES Name :',missingData.NESName],['Comparison Activated/Deactivated :',missingData.check?'Checked':'Unchecked'],
                  ['Status of BOM(Proto/series) :','kll']]
                  
                
    pdf.autoTable({
      margin: { top: 60 },body:column})
    // pdf.autoTable({html:'#ty',margin: {top: 60}})
    //pdf.addFont(fontStyle:'italic')
    pdf.setFontSize(12)
    pdf.text(15,120,'Comparison result :')

    pdf.setFontSize(10)
    pdf.text(15,125,'Compared to the NES Structure, the BOM is : ')
    pdf.text(90,125,bom.compareStatus?'Correct':'Incorrect')
    // if(missingData.check){
    // pdf.setFont('Times','Italic')
    // pdf.rect(15,140,30,10)
    // pdf.text(15,155,'Signature')
    // pdf.rect(150,140,30,10)
    // pdf.text(150,155,'Supervisor Signature')
    // }
    pdf.save(bom.bomNo)
    
    

  }
  let navigate=useNavigate()
  const goHome=()=>{
    navigate('/')
  }
  return (
    <div >
      <HeaderComponent/>
      <img src={webhome} style={{position:'absolute',top:'80px',marginLeft:'30px',width:'50px'}} onClick={goHome}></img>
      {/* <button onClick={goHome} style={{position:'absolute',top:'80px',marginLeft:'20px'}}>goHome</button> */}
        <h1 style={{marginLeft:'30px'}}>BOM compared to  NES-ID: {bom.NESName} Version {bom.NESVersion}</h1>
        <Button  onClick={print} disabled={check||bom.compareStatus?false:true}
          style={{backgroundColor:'minor accent',width:'200px',height:'25px',float:'right',marginRight:'50px',marginBottom:'10px'}} 
          variant="contained" color="primary" >
          Generate Report 
           </Button>
           {BasicTable()}
    </div>
  );
}


