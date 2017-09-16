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
  page: number = 1;
  total: number;

  constructor(private bar:BarService,private commentService:CommentService) { 

  }

  ngOnInit() {
    this.bar.show();
    this.loadComments(1);
  }

loadComments(event) {
  console.log(event);
  this.commentService.getComments(event).subscribe(     
    (res) => {
        console.log(res);
        this.comments = res['result']['info']['data'];
        this.total = res['result']['info']['total'];;
        this.page = res['result']['info']['current_page'];;
    },
  (err) => { 
      console.log(err);
  }) 

}


}

