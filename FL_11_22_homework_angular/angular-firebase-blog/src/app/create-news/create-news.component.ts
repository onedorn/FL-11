import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../modules/news';
  
@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  blog_title = 'Create article';  

  news: News = {
    title: '',
    category: '',
    description: '',
    content: '',
    author: '',
    date: null,
    url: ''
  }

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    if(this.news.title !== '' || this.news.description !== '') {
      if(this.news.date !== null || this.news.content !== '') {
        if(this.news.url !== '' || this.news.author !== '') {
          this.newsService.addItem(this.news);

          this.news.title = '';
          this.news.description = '';
          this.news.content = '';
          this.news.date = null;
          this.news.author = '';
          this.news.url = '';
        }
      }
    }
  }
}
