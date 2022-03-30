import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(apiUrl);
  }

  deletePost(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  createPost(obj: {title:string, content: string}) {
    return this.http.post(apiUrl, obj);
  }

}
