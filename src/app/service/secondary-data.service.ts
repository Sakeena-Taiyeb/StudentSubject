import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders,HttpParams} from '@angular/common/http' ;
import {map, filter,catchError, scan, tap} from 'rxjs/operators' ;
import { throwError, Observable } from 'rxjs';
import{SecondaryStudentModel} from 'src/app/model/SecondaryStudent.model';

@Injectable({
  providedIn: 'root'
})
export class SecondaryDataService {
  readonly rootURL ="/assets/files/secondaryStudentDetail.json";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http:HttpClient) { }
  getItems():Observable<any> {
    return this.http.get(this.rootURL);//.pipe (map(data => data.valueOf()),
    //catchError(this.handleError)
    //)
  }
      
    private handleError(error: any) {
        console.log(error);
        return throwError(error);
      }
    
    addItem(newItem:SecondaryStudentModel):Observable<any> {
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http.post(this.rootURL, newItem,{headers:headers});
      }
    
    
    deleteItem(id):Observable<any> {
    return this.http
    .delete(this.rootURL + id).pipe(map (res => res.valueOf()),
    catchError(this.handleError)
     ) }
    
    updateItem(newItem):Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
               .put(this.rootURL + newItem._id, newItem, { headers: headers})
                .pipe(map(res => res.valueOf()),
                catchError(this.handleError)
                )}
    
                getStudentById():Observable<any>{
                  let param1= new HttpParams().set('Id',"7");
                  return this.http.get(this.rootURL,{params:param1})
                }
    }

