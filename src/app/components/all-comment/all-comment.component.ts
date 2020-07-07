import { Component, OnInit } from '@angular/core';
import {CommentService} from '../services/comment/comment.service';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent implements OnInit {

  comments: Comment[ ];
  constructor(private commentService: CommentService) {
    this.commentService.getComment().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
