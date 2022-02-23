import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

@Injectable()
export class FeedService {
  constructor(private httpClient: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;

    return this.httpClient.get<GetFeedResponseInterface>(fullUrl);
  }
}
