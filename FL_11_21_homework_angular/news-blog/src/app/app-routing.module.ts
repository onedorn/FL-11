import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from "../app/navbar/navbar.component";
import { CreateNewsComponent } from './create-news/create-news.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'create-news',
    component: CreateNewsComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
