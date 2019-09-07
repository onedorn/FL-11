import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from "@angular/fire/firestore";
import { News } from '../modules/news';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsCollection: AngularFirestoreCollection<News>;
  news:Observable<News[]>;

  constructor(public afs: AngularFirestore) {
    // this.news = this.afs.collection('news').valueChanges();
    this.newsCollection = afs.collection<News>('news');
    this.news = this.newsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as News;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getNews() {
    return this.news;
  }
}

