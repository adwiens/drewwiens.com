import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: ArticlesComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ]
})
export class ArticlesModule { }
