import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SpeakingComponent } from './speaking/speaking.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: SpeakingComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [SpeakingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class SpeakingModule { }
