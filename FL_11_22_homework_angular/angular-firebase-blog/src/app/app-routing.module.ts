import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsComponent } from './create-news/create-news.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-article',
    component: CreateNewsComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
