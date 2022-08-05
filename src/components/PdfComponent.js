import MissingData from '../Data/MissingData.json'
import HeaderComponent from './HeaderComponent'
import bom from '../Data/bom.json'
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import bosch_base from '../bosch_base.png'
import Bosch from './images/Bosch.PNG'
import missingData from '../Data/MissingData.json'

const PdfComponent=()=>{
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
  if(missingData.check&&missingData.changeNo.startsWith(3E10)){
  pdf.setFont('Times','Italic')
  pdf.rect(15,140,30,10)
  pdf.text(15,155,'Signature')
  pdf.rect(150,140,30,10)
  pdf.text(150,155,'Supervisor Signature')
  }
  pdf.save(bom.bomNo)

}
export default PdfComponent