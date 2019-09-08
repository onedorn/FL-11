import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article_title = "Source news";
  article = {};
  
  constructor(private newService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.newService.getNews().subscribe(news => {
      this.article = news.find(item => item.id === id);
      console.log(this.article);
    })
    
  }

}
