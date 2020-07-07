import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../services/comment/comment.service';

@Component({
  selector: 'app-comments-of-posts',
  templateUrl: './comments-of-posts.component.html',
  styleUrls: ['./comments-of-posts.component.css']
})
export class CommentsOfPostsComponent implements OnInit {

  comments: Comment[];
  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getCommentsOfPost(value.id).subscribe(comment => this.comments = comment);
    });
  }
  ngOnInit(): void {
  }

}
