import { Component, OnInit } from '@angular/core';
import { BarService } from "app/_services/bar.service";
import { CommentService } from "../_services/comment.service";

import { Comment }  from '../_models/comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  comments: Comment[];

  constructor(private bar:BarService,private commentService:CommentService) { }


  ngOnInit() {
    this.bar.show();
    this.loadComments();
  }

loadComments() {
  this.commentService.getComments().subscribe(     
    (res) => {
        console.log(res);
        this.comments = res['result']['info']['data'];
       
    },
  (err) => { 
      console.log(err);
  }) 

}


}

