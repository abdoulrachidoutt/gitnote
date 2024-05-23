import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Evaluations } from '../models/evaluations';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  private baseUrl = 'http://localhost:8080/api/evaluations';
  public formData!:  FormGroup; 

  list: any;
 
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  choixmenu : string  = "A";
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/read/${id}`);
  }
 
  saveOrUpdate(info: Object) {
   
   return this.http.post(`${this.baseUrl}/create`,info);
  }
    
  
  //saveOrUpdate(info: Object): Observable<Object> {
  
   // return this.http.post(`${this.baseUrl}`, info);
  //}
  updatedata(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/evaluations/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/evaluations/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/read`);
  }
  
  deleteAll(id: number): Observable<any> {
  
    return this.http.delete(`${this.baseUrl}/evaluations/${id}`, { responseType: 'text' });
  }
}
