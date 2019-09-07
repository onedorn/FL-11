import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private newsService: NewsService) {}

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

  filteredNews = [];
  news = [];

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.filteredNews = this.news;
  }

  removeDynamicNews(id) {
    this.newsService.deleteById(id);
  }

  changeTitle(value) {
    const currentMenu = this.dropdown_menu.find(item => item.value === value);
    this.blog_title = currentMenu.title;
    this.filteredNews = value === "all" ? this.news : this.news.filter(item => item.category === value);
  }

  searchByTitle(value) {
    this.filteredNews = this.news.filter(item => {
      const little = item.heading.toLowerCase();
      return little.indexOf(value) !== -1;
    });
  }
}
