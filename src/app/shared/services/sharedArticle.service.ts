import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { GetArticleResponseInterace } from '../types/getArticleResponse.interface';

@Injectable()
export class SharedArticleService {
  constructor(private httpCLient: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.httpCLient
      .get<GetArticleResponseInterace>(fullUrl)
      .pipe(map((response: GetArticleResponseInterace) => response.article));
  }
}
