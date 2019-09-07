import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NewsService } from "../news.service";

@Component({
  selector: "app-create-news",
  templateUrl: "./create-news.component.html",
  styleUrls: ["./create-news.component.scss"]
})
export class CreateNewsComponent implements OnInit {

  blog_news = "Create News";

  news = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {}

  createNews(heading, description, content, date, author, url) {
    if ( heading.value || description.value || content.value || date.value || author.value || url.value ) {
      const articles = this.newsService.getNews();
      const id = articles.length + 1;
      let article = {
        heading: heading.value,
        description: description.value,
        content: content.value,
        date: date.value,
        author: author.value,
        url: url.value,
        id
      };

      this.newsService.addNew(article);

      heading.value = "";
      description.value = "";
      content.value = "";
      date.value = "";
      author.value = "";
      url.value = "";
    }
  }
}
