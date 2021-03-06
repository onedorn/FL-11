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
  filteredNews: News[] = [];
  blog_title = "All categories";

  dropdown_menu = [
    {
      value: "all",
      title: "All categories"
    },
    {
      value: "sport",
      title: "Sport news"
    },
    {
      value: "food",
      title: "Food recipes"
    },
    {
      value: "travel",
      title: "Travel stories"
    }
  ];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      this.filteredNews = this.news;
    })
  }

  changeTitle(value) {
    const currentMenu = this.dropdown_menu.find(item => item.value === value);
    this.blog_title = currentMenu.title;
    this.filteredNews = value === "all" ? this.news : this.news.filter(item => item.category === value);
  }

  deleteItem(event, item) {
    this.newsService.deleteItem(item);
  }

  searchByTitle(value) {
    this.filteredNews = this.news.filter(item => {
      const little = item.title.toLowerCase();
      return little.indexOf(value) !== -1;
    });
  }

  findById(id) {
    return this.news.find(item => item.id === id);
  }
}
