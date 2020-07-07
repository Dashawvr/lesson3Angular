 import { Component, OnInit } from '@angular/core';
 import {PostService} from '../services/post/post.service';
 import {Post} from '../models/Post';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  posts: Post[ ];
  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
