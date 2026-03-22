// card-search.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class CardSearchService {
  constructor(private http: HttpClient) {}

  search(query: string): Observable<any[]> {
    let headers = new HttpHeaders();
    if (!environment.production && environment.bearer) {
      headers = headers.set('Authorization', `Bearer ${environment.bearer}`);
    }
    return this.http.post<any>(environment.apiUrl, 
      { 
        q: query, 
        limit: 10
      }, 
      { headers }
    ).pipe(
      map(response => response.hits)
    );
  }
}