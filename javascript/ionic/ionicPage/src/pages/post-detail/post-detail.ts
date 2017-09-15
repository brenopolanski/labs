import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/post.interface';
import { Observable } from 'rxjs/Observable';

@IonicPage({
  segment: 'posts/:postId',
  defaultHistory: ['PostsPage']
})
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  postId: number;
  post: Observable<Array<Post>>;

  constructor(
    private data: DataProvider,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    this.postId = this.navParams.get('postId');
    console.log(this.postId);
    this.post = this.data.getPostById(this.postId);
  }

}
