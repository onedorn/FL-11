import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from "@angular/fire/firestore";
import { News } from '../modules/news';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsCollection: AngularFirestoreCollection<News>;
  news = new BehaviorSubject([]);
  newsDoc: AngularFirestoreDocument<News>;

  constructor(public afs: AngularFirestore) {
    this.newsCollection = afs.collection<News>('news', ref => ref.orderBy('title', 'asc'));
    this.newsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as News;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe((news) => {
      return this.news.next(news)
    })
  }

  getNews() {
    return this.news;
  }

  addItem(news: News) {
    this.newsCollection.add(news);
  }

  deleteItem( news: News) {
    this.newsDoc = this.afs.doc(`news/${news.id}`);
    this.newsDoc.delete()
  }

  

}

