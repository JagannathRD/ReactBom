import { NgModule } from '@angular/core';
import{MatButtonModule} from '@angular/material/button'
import{MatTableModule} from '@angular/material/table'

const materialComponents=[MatButtonModule,MatTableModule]

@NgModule({
  exports: [materialComponents],
  imports: [materialComponents
    
  ]
})
export class MaterialModule { }
