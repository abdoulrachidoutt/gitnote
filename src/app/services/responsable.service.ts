import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Responsable } from '../models/responsable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  url: string ='http://localhost:8080/responsable'

  constructor(private http: HttpClient) { }

  createResponsable(responsable: Responsable): Observable<Responsable>{
    return this.http.post<Responsable>(this.url+ '/create',responsable);
  }

  getResponsable(): Observable<Responsable[]>{
    return this.http.get<Responsable[]>(this.url+ '/read');
  }

  deleteResponsable(id: any): Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`)
  }

  postResponsable(data: any): Observable<any>{
    // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
    return this.http.post<any>(this.url+'/create', data)
   
   }
}
