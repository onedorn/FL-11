import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../modules/news';
  
@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {

  news: News = {
    title: '',
    description: '',
    content: '',
    author: '',
    date: null,
    url: ''
  }

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

}
