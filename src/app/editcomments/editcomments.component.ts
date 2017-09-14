import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
  comments: Comment[];
  cSuccess : string;
  public currentEmployee: Employee;

  constructor(private _route: ActivatedRoute,private commentService : CommentService) { 
    
  }
 
  ngOnInit() {
    console.log("edit comments");
    this._route.params.subscribe(params => {
      this.id = params['id'];     
    });
    console.log(this.id);
   // this.getCommentsById(this.id);

    this.commentService.getEmployee(this.id).subscribe(
      employee => {
        console.log("employee");
        console.log(employee);
        this.currentEmployee = employee['result']['info'];       
        console.log("currentEmployee");
        console.log(this.currentEmployee);
        console.log(this.currentEmployee['author']);
      }
    );

  }


 

  getCommentsById(id) {
  this.commentService.getCommentsById(id).subscribe(     
    (res) => {
        this.comments = res['result']['info'];
        console.log("this.comments");
        console.log(this.comments);
        
       
    },
  (err) => { 
      console.log(err);
  }) 
}

updateComments(id){

  this.commentService.updateComments(this.currentEmployee,id).subscribe(
    (res) => {
      this.cSuccess = res['result']['msg'];
    },
    (err) => {
      console.log(err);
    }
  )

}

}
