import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-httpp',
  templateUrl: './posts-httpp.component.html',
  styleUrls: ['./posts-httpp.component.css']
})
export class PostsHttppComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  addTodo(input: HTMLInputElement) {
    let post = { title: input.value };

    //add post to list
    this.posts.splice(0, 0, post);

    this.service.create(post)
      .subscribe(x => {
        post['id'] = x.id;
      },
      (error: AppError) => {
        //remove from list
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          console.log("Bad Request Error");
        } else {
          //let global error hander handle it
          throw error;
        }
      });


    input.value = '';
  }

  updatePost(post) {
    let oldTitle = post.title;
    let dialog = prompt('Updated name', post.title);

    if (dialog) {
      //patch (partial update only 
      //send modified properties)
      post.title = dialog;

      this.service.editPatch(post.id, { isRead: true })
        .subscribe(x => { },
        (error: AppError) => {
          //roll back changes
          console.log(oldTitle);
          post.title = oldTitle;
          if (error instanceof BadRequestError) {
            console.log("Bad Request Error");
          } else {
            throw error;
          }
        });

      this.service.editPut(post['id'], post)
        .subscribe(x => {
          console.log(x);
        },
        (error: AppError) => {
          if (error instanceof BadRequestError) {
            console.log("Bad Request Error");
          } else {
            throw error;
          }
        });
    }
  }

  deletePost(postId: number, index: number) {
    //remove from list
    let deletedPost = this.posts.splice(index, 1)[0];

    this.service.delete(postId)
      .subscribe(post => { },
      (error: AppError) => {
        //roll back changes
        this.posts.splice(index, 0, deletedPost);
        if (error instanceof NotFoundError) {
          alert('Post has already been deleted');
        } else {
          throw error;
        }
      });
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
