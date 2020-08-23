import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
    data: {
      meta: { title: 'Drew Wiens - Articles and Papers' },
    },
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule),
    data: {
      meta: { title: 'Drew Wiens - Videos' },
    },
  },
  {
    path: 'speaking',
    loadChildren: () => import('./speaking/speaking.module').then(m => m.SpeakingModule),
    data: {
      meta: { title: 'Drew Wiens - Speaking' },
    },
  },
  {
    path: 'teaching',
    loadChildren: () => import('./teaching/teaching.module').then(m => m.TeachingModule),
    data: {
      meta: { title: 'Drew Wiens - Teaching' },
    },
  },
  {
    path: 'links',
    loadChildren: () => import('./links/links.module').then(m => m.LinksModule),
    data: {
      meta: { title: 'Drew Wiens - Links' },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
