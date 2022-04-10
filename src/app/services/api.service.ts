import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }




  getPosts(){
    return this.http.get('http://localhost:3000/posts/allposts');
  }
  getIndividualPost(id:any){
    return this.http.get('http://localhost:3000/posts/onepost/'+id);
  }
}
