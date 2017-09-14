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

  constructor (private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  
  private commentsUrl = 'http://localhost:8000/api/'; 
  
  // Fetch all existing comments
  getComments() : Observable<Comment[]> {
      return this.http.get(this.commentsUrl+'getComments')
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

  // updateComments():Observable<Comment[]>{
  //   let body = JSON.stringify(param);
  //   return this.http.post(this.commentsUrl+"updateComments",body,options)
  //   .map((res:Response) => <Comment[]>res.json())
  //   .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  // }

  updateComments(param: any,id:any): Observable<Comment[]> {
    console.log(param);
    let body = JSON.stringify(param);
    let list ={
      "id":1,
      "author":"donate",
      "text":"donate_id"
    };
    return this.http
        .post(this.commentsUrl+"updateComments/"+id, list, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }   

    // donateOrganization(donate_id,donate){
    //   this.list ={
    //    "token":this.token,
    //    "org_id":donate,
    //    "id":donate_id
    //  }
    //  return this.http.post(`${this.rootUrl}admin_donate_gift`,this.list,this.headers)
    //     .map(res =>res.json());
    // }

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

         
}
