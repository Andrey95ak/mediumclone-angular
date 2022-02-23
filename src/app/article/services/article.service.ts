import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class ArticleService {
   
   constructor(private httpClient: HttpClient) {}

   deleteArticle(slug: string): Observable<{}> {
      const url = `${environment.apiUrl}/articles/${slug}`;

      return this.httpClient.delete<{}>(url);
   }
}