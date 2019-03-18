import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  {
    path: 'articles',
    loadChildren: './articles/articles.module#ArticlesModule',
    canActivate: [ MetaGuard ],
    data: {
      meta: { title: 'Articles and Papers | Andy Wiens' },
    },
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosModule',
    canActivate: [ MetaGuard ],
    data: {
      meta: { title: 'Videos | Andy Wiens' },
    },
  },
  {
    path: 'speaking',
    loadChildren: './speaking/speaking.module#SpeakingModule',
    canActivate: [ MetaGuard ],
    data: {
      meta: { title: 'Speaking | Andy Wiens' },
    },
  },
  {
    path: 'teaching',
    loadChildren: './teaching/teaching.module#TeachingModule',
    canActivate: [ MetaGuard ],
    data: {
      meta: { title: 'Teaching | Andy Wiens' },
    },
  },
  {
    path: 'links',
    loadChildren: './links/links.module#LinksModule',
    canActivate: [ MetaGuard ],
    data: {
      meta: { title: 'Links | Andy Wiens' },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
