import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url = 'http://127.0.0.1/Leviatan/exercice-5/fifth-exercice-back/articles';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<any>(this.url);
  }

  getArticle(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/view/' + id);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/delete/' + id);
  }

  add(article: any): Observable<any> {
    return this.http.post<any>(this.url + '/add', article);
  }

  edit(articleId:number ,article: any): Observable<any> {
    return this.http.put<any>(this.url + '/edit/' + articleId , article);
  }
}
