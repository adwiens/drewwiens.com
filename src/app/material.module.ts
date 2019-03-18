import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as mat from '@angular/material';

const matModules = [
  mat.MatCardModule,
  mat.MatToolbarModule,
  mat.MatIconModule,
  mat.MatButtonModule,
];

@NgModule({
  imports: [ ...matModules, CommonModule ],
  exports: [ ...matModules ]
})
export class MaterialModule { }
