import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Comment } from "../_models/comment";
import { CommentService } from "app/_services/comment.service";

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.scss']
})
export class AddcommentsComponent implements OnInit {
  
  public comments: Comment = {id:0,author:"",text:""};
  
  constructor(private router:Router,private commentService:CommentService) { 
  
  }

  ngOnInit() {
  }

  saveComment(){
    console.log(this.comments);

    this.commentService.saveComments(this.comments).subscribe(
      (res) => {
        res => this.comments = res;
        
        console.log(res['result']['info']['msg']);
        window.history.back();
        //this.router.navigate(['/comments']);  
      },
      (err) => {
        console.log(err);
      })


  }

}
