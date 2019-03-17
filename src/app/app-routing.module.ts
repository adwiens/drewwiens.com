import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule' },
  { path: 'videos', loadChildren: './videos/videos.module#VideosModule' },
  { path: 'speaking', loadChildren: './speaking/speaking.module#SpeakingModule' },
  { path: 'teaching', loadChildren: './teaching/teaching.module#TeachingModule' },
  { path: 'links', loadChildren: './links/links.module#LinksModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
