import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideosComponent } from './videos/videos.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: VideosComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class VideosModule { }
