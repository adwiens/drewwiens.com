import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: '', component: LinksComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LinksModule { }
