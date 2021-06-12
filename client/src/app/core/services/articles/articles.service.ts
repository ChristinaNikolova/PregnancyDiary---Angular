import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IArticle from 'src/app/components/shared/models/article/IArticle';
import { environment } from 'src/environments/environment';

const articlesBaseUrl = environment.apiBaseUrl + 'articles/';
const allUrl = 'all';
const orderUrl = 'order';
const searchUrl = 'search';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  all(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + allUrl);
  }

  order(criteria: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + orderUrl + `/${criteria}`);
  }

  search(query: string): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(articlesBaseUrl + searchUrl + `/${query}`);
  }
}