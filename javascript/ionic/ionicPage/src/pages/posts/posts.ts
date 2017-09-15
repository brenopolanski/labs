import { DataProvider } from './../../providers/data/data';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post.interface';

@IonicPage({
  segment: 'posts'
})
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: Observable<Array<Post>>;

  constructor(
    private data: DataProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.data.getPosts();
  }

  navigateToDetail(postId: number) {
    this.navCtrl.push('PostDetailPage', { postId });
  }

}
