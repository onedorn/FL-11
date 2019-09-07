import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NewsService {

  default_news = [
    {
      id: 0,
      category: "food",
      heading: "Family food",
      description: "Our jam-packed family food hub",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?",
      date: "14 of March 2019",
      author: "Jamie Olivier",
      url: "https://img.etimg.com/thumb/msid-68680996,width-643,imgsize-1492594,resizemode-4/pizza.jpg"
    },
    {
      id: 1,
      category: "sport",
      heading: "Vegetarian food",
      description: "How to stay always health",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?",
      date: "14 of March 2019",
      author: "Salvador Dali",
      url: "https://cdn-prod.medicalnewstoday.com/content/images/articles/318/318601/avocado-sliced.jpg"
    },
    {
      id: 3,
      category: "travel",
      heading: "Adventure every day",
      description: "How to stay always health",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat commodi accusantium deserunt? Quasi porro nam quae autem, quaerat sed! Fuga id soluta esse modi est, obcaecati dolor dolorum placeat?",
      date: "14 of March 2019",
      author: "Salvador Dali",
      url: "https://www.telegraph.co.uk/content/dam/Travel/2017/December/mil%20cover-xlarge.jpg"
    }
  ];

  constructor() {}

  getNews() {
    return this.default_news;
  }
  
  addNew(article) {
    this.default_news.push(article);
  }

  findById(id) {
    return this.default_news.find(item => item.id === Number(id));
  }

  deleteById(id) {
    const index = this.default_news.findIndex(item => item.id === id);
    this.default_news.splice(index, 1);
  }
}
