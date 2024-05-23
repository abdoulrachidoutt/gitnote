import { Injectable } from '@angular/core';
import { Levaluations } from '../models/levalutions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevaluationsService {

  
 //formData :Lb1016;
 private baseUrl = 'http://localhost:8080/api/evaluations';
 
 levaluations : Levaluations = new Levaluations();

 constructor(private http: HttpClient) { }
 addLcomm(info: Object): Observable<Object> {
   return this.http.post(`${this.baseUrl}/create`, info);
 }


getAll(id: number): Observable<Object> {
  return this.http.get(`${this.baseUrl}/read/${id}`);
}
}
