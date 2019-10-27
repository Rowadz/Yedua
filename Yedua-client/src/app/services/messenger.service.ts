import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Lvl } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  private readonly endpoint: string;

  constructor(private readonly http: HttpClient) {
    const { apiUrl, apiPrefix } = environment;
    this.endpoint = `${apiUrl}/${apiPrefix}`;
  }

  jeepData(url: string, lvl: Lvl): Observable<any> {
    return this.http.get(
      `${this.endpoint}/this/${encodeURIComponent(url)}/${lvl}`
    );
  }
}
