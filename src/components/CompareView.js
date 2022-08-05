import { TableCell, TableRow,TableContainer,Paper,Table,TableBody,TableHead } from '@mui/material'
import MissingData from '../Data/MissingData.json'
import HeaderComponent from './HeaderComponent'
import bom from '../Data/bom.json'
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import bosch_base from '../bosch_base.png'
import Bosch from './images/Bosch.PNG'
import missingData from '../Data/MissingData.json'
import PdfComponent from './PdfComponent';
import QwertyComponent from './QwertyComponent'
import { useState } from 'react';

function CompareView(props){
    const data=MissingData.missingData
  
    
    function headerTable(){
      const date= new Date().toLocaleString() 
      return(
        <div style={{marginLeft:'30px',marginRight:'30px'}}>
        <TableContainer component={Paper} sx={{  maxHeight:'500px',overflow:'auto' }}>
          <Table  aria-label="simple table" id='header'>
            <TableHead style={{position:'sticky',top:'0',background:'#eee'}}>
              <TableRow>
                
                <TableCell>From</TableCell>
                <TableCell >Our Reference</TableCell>
                <TableCell >Tel</TableCell>
                <TableCell >Date</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow>
                  <TableCell>AS/EDM-P</TableCell>
                    
              
                  <TableCell >Thorsten Kickmaier</TableCell>
                  <TableCell>+49717131-8596</TableCell>
                  <TableCell >{date}</TableCell>

                  
                </TableRow>
              ))
            </TableBody>
          </Table>
        </TableContainer>
        </div>

      )
    }

    function difTable(){
      return(
        <div style={{marginLeft:'30px',marginRight:'30px'}}>
        <TableContainer component={Paper} sx={{  maxHeight:'500px',overflow:'auto' }}>
          <Table  aria-label="simple table" id='ty'>
            <TableHead style={{position:'sticky',top:'0',background:'#eee'}}>
              <TableRow>
                <TableCell>Must position</TableCell>
                <TableCell>Change No</TableCell>
                <TableCell >Explosion Level</TableCell>
                <TableCell >Description</TableCell>
                <TableCell >Level One Pos No</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row,i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell  scope="row">
                    {row.mustPostion}
                  </TableCell>
                  <TableCell >{missingData.changeNo}</TableCell>
                  <TableCell>{row.expLevel}</TableCell>
                  <TableCell >{row.description}</TableCell>
                  <TableCell >{row.lvlOnePosNr}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        
      )

    }
    const print=()=>{
      const pdf= new jsPDF();
      const img= new Image();
      img.src=Bosch
      pdf.addImage(img,'png',150,5)
      const date= new Date().toLocaleString()  
      pdf.setFontSize(10)
      // pdf.text(10,25, '   From             '+"                "+" Our Reference      "+"           "+" Tel           "+"                "+ " Date")
      // pdf.setFontSize(12)
      // pdf.text(10,30, '  AS/EDM-P'+"     "+" Thorsten Kickmaier "+" "+" +49717131-8596"+"    "+date)
      //let headerData=[['From','Our Preference','Tel','Date']]
      let columData=[['From','Our Preference','Tel','Date'],['AS/EDM-P','Thorsten Kickmaier','+49717131-8596',date]]
      pdf.autoTable({theme: 'plain',margin:{top:20},body:columData})
      pdf.setFontSize(18)
      pdf.text(15,45,'BOM Comparison Report')
        
                    let column=[['Customer :',missingData.customer],['Project :',missingData.project],['Change No :',missingData.changeNo],
                    ['NES Name :',missingData.NESName],['Comparison Activated/Deactivated :',missingData.check?'Checked':'Unchecked'],
                    ['Status of BOM(Proto/series) :',missingData.changeNo.startsWith('3E10')?'Series':'Proto'],['Bom differences :','Page-2']]
                    
                  
      pdf.autoTable({
        body:column,startY: pdf.lastAutoTable.finalY + 15})
      

      pdf.setFontSize(10)
      pdf.text(15,125,'Compared to the NES Structure, the BOM is : ')
      pdf.text(90,125,bom.compareStatus?'Correct':'Incorrect')
      pdf.setFont('Times','Italic')
      pdf.rect(15,140,30,10)
      pdf.text(15,155,'Signature')
      if(missingData.check&&missingData.changeNo.startsWith('3E10')){
      
      pdf.rect(150,140,30,10)
      pdf.text(150,155,'Supervisor Signature')
      }
      pdf.addPage()
      pdf.setFont('Times','Normal')
      pdf.setFontSize(14)
      pdf.text(15,20,'BOM Missing Data ')

      pdf.autoTable({margin:{top:25},html:'#ty'})
      
      pdf.save(bom.bomNo)
      
      

    }
    const date= new Date().toLocaleString()
    
    return(
        <>
       
     <HeaderComponent />
     

     <Button  onClick={print} disabled={!bom.check}
          style={{backgroundColor:'minor accent',width:'200px',height:'25px',float:'right',marginRight:'50px',marginBottom:'10px'}} 
          variant="contained" color="primary" >
          Generate Report 
           </Button>
           {difTable()}
           {headerTable}
            
        </>
    )

}
export default CompareView