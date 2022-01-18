import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input('article') article: any;
  closeBtnName?: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
