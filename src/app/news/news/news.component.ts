import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NewsDetailsComponent } from '../news-details/news-details.component';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any;
  bsModalRef?: BsModalRef
  constructor(private apiService: NewsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(data => {
      console.log(data);
      this.articles = data;
    });
  }

  viewNews(article: any) {
    const initialState: ModalOptions = {
      initialState: {
        article: article
      }
    }
    this.bsModalRef = this.modalService.show(NewsDetailsComponent, initialState);
  }
}

