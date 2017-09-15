import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class DataProvider {

  rootUrl: string = 'https://jsonplaceholder.typicode.com';
  posts: string = 'posts';

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getPosts() {
    return this.http.get(`${this.rootUrl}/${this.posts}`)
      .map(res => res.json())
      .take(1);
  }

  getPostById(id: number) {
    return this.http.get(`${this.rootUrl}/${this.posts}/${id}`)
      .map(res => res.json())
      .take(1);
  }

}
