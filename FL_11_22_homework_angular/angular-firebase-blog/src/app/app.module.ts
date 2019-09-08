import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { HomeComponent } from "./home/home.component";
import { NewsService } from "./services/news.service";
import { CreateNewsComponent } from "./create-news/create-news.component";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CreateNewsComponent, ArticleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp( environment.firebase, "angular-firebase-blog" ),
    AngularFirestoreModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
