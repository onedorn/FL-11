import { Component, OnInit } from '@angular/core';
import { NewsService } from "../services/news.service";
import { News } from "../modules/news";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    })
  }

}
