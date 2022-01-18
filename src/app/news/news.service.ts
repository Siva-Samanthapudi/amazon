import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, interval } from 'rxjs';
import { mergeMap, map, filter } from 'rxjs/operators';
@Injectable()
export class NewsService {
  API_KEY = 'c5429bf234904f18a5e3005181313f73';
  private doctors = [];

  constructor(private httpClient: HttpClient) { }


  public getNews(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }


  getDoctors(){
    return this.httpClient.get<any>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`)
    //.pipe(mergeMap(response => response), filter(response))
  }
}


