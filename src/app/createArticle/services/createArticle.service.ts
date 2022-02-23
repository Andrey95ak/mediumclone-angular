import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(
    articleinput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullurl = environment.apiUrl + '/articles';

    return this.httpClient
      .post<SaveArticleResponseInterface>(fullurl, {article: articleinput})
      .pipe(
        map(
          (articleResponse: SaveArticleResponseInterface) =>
            articleResponse.article
        )
      );
  }
}
