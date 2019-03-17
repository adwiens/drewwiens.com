import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SpeakingComponent } from './speaking/speaking.component';

const routes: Routes = [
  { path: '', component: SpeakingComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [SpeakingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SpeakingModule { }
