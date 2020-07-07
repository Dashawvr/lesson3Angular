import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {PostService} from '../services/post/post.service';
import {logger} from 'codelyzer/util/logger';
import {CommentService} from '../services/comment/comment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
  }

  // details(id: number): void {
  //   this.postService.getPosts(id).subscribe( postOfUser => {
  //     console.log(postOfUser);
  //     for (const post of postOfUser) {
  //       this.commentService
  //         .getCommentsOfPost(post.id )
  //         .subscribe(commentsOfPostOfUser => console.log(commentsOfPostOfUser ));
  //     }
  //   } );
  // }
}
