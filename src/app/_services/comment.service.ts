import { Injectable } from '@angular/core';
import { Http , Response , Headers , RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Comment } from '../_models/comment';
import { Employee }    from '../_models/employee';


@Injectable()
export class CommentService {

  headers: Headers;
  options: RequestOptions;
  comment:Comment[];

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  
  private commentsUrl = 'http://localhost:8000/api/'; 
  
  // Fetch all existing comments
  getComments(page:any) : Observable<Comment[]> {
      return this.http.get(this.commentsUrl+'getComments?page='+page)
      .map((res:Response) => <Comment[]>res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

  getCommentsById(id):Observable<Comment[]>{
    return this.http.get(this.commentsUrl+"getCommentsById/"+id)
    .map((res:Response) => <Comment[]>res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getEmployee (id: number): Observable<Employee>  {
  
    return this.http.get(this.commentsUrl+"getCommentsById/"+id)
                    .map(res => this._log(res))
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  private _log(res): Employee {
    return res.json();
  }

  updateComments(param: any,id:any):Observable<Comment[]>{
    let body = JSON.stringify(param);
    return this.http.post(this.commentsUrl+"updateComments/"+id,body,this.options)
    .map((res:Response) => <Comment[]>res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }  

  saveComments(param:any):Observable<Comment[]>{
    let body = JSON.stringify(param);
    return this.http.post(this.commentsUrl+"addComments",body,this.options)
    .map(res =>  <Comment> res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
         
}
