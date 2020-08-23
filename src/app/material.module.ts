import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const matModules = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [...matModules, CommonModule],
  exports: [...matModules],
})
export class MaterialModule {}
