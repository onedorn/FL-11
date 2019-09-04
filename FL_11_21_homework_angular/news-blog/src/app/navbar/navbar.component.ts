import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  blog_title = 'Food Blog';
  
  constructor() { }

  news = [];

  default = [
    {
      "heading": "Family food",
      "description": "Our jam-packed family food hub",
      "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      "date": "14 of March 2019",
      "author": "Jamie Olivier",
      "url": "https://img.etimg.com/thumb/msid-68680996,width-643,imgsize-1492594,resizemode-4/pizza.jpg"
    },
    {
      "heading": "Vegetarian food",
      "description": "How to stay always health",
      "content": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?',
      "date": "14 of March 2019",
      "author": "Salvador Dali",
      "url": "https://cdn-prod.medicalnewstoday.com/content/images/articles/318/318601/avocado-sliced.jpg"
    }
  ];

  ngOnInit() {
    this.news = JSON.parse(localStorage.getItem("news"));
  }

  removeDefaultNews (news) {
    let index = this.default.indexOf(news);
    this.default.splice(index, 1);
  }
  
  removeDynamicNews(def) {
    let index = this.news.indexOf(def);
    this.news.splice(index, 1);
    localStorage.setItem("news", JSON.stringify(this.news))
  }

}
