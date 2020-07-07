import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {UserService} from './components/services/user/user.service';
import {RouterModule} from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { AllCommentComponent } from './components/all-comment/all-comment.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';
import { CommentsOfPostsComponent } from './components/comments-of-posts/comments-of-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    AllUserComponent,
    AllPostComponent,
    AllCommentComponent,
    PostsOfUserComponent,
    CommentsOfPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUserComponent},
      {path: 'posts', component: AllPostComponent},
      {path: 'comments', component:AllCommentComponent},
      {path: 'users/posts/:id', component: PostsOfUserComponent},
      {path: 'posts/comments/:id', component: CommentsOfPostsComponent}
      ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
