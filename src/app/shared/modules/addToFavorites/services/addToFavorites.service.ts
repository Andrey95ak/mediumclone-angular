import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { GetArticleResponseInterace } from "src/app/shared/types/getArticleResponse.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class AddToFavoritesService {
   constructor(private httpClient: HttpClient) {}

   addToFavorites(slug: string): Observable<ArticleInterface> {
      const url = this.getUrl(slug);

      return this.httpClient.post(url, {}).pipe(map(this.getArticle));
   }

   removeToFavorites(slug: string): Observable<ArticleInterface> {
      const url = this.getUrl(slug);

      return this.httpClient.delete(url).pipe(map(this.getArticle));
   }

   getUrl(slug: string): string {
      return `${environment.apiUrl}/articles/${slug}/favorite`;
   }

   getArticle(response: GetArticleResponseInterace): ArticleInterface {
      return response.article;
   }
}