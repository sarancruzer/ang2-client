import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from "app/_services/comment.service";
import { Comment } from "../_models/comment";
import { Employee  } from "../_models/employee";

@Component({
  selector: 'app-editcomments',
  templateUrl: './editcomments.component.html',
  styleUrls: ['./editcomments.component.scss']
})
export class EditcommentsComponent implements OnInit {

  id : number;
  cSuccess : string;

  public comments: Comment = {id:0,author:"",text:""};
  
  constructor(private _route: ActivatedRoute,private commentService : CommentService,private router:Router) { 
    
  }
 
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id'];     
    });
    this.getCommentsById(this.id);
  }

  getCommentsById(id) {
  this.commentService.getCommentsById(id).subscribe(     
    (res) => {
        this.comments = res['result']['info'];
    },
  (err) => { 
      console.log(err);
  }) 
}

updateComments(id){
  this.commentService.updateComments(this.comments,id).subscribe(
    (res) => {
     // this.cSuccess = res['result']['msg'];
      this.router.navigate(['/comments']);  
    },
    (err) => {
      console.log(err);
    }
  )

}

}
