import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    NewsService,
  ]
})
export class NewsModule { }
