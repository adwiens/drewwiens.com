import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TeachingComponent } from './teaching/teaching.component';

const routes: Routes = [
  { path: '', component: TeachingComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [TeachingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TeachingModule { }
