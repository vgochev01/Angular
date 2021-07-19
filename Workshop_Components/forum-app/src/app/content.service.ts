import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interface';

import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {}

  loadThemes(){
    return this.http.get<ITheme[]>(`${API_URL}/themes`);
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : '';
    return this.http.get<IPost[]>(`${API_URL}/posts?${query}`);
  }
}
