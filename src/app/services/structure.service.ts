import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Structure } from '../models/structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  url: string ='http://localhost:8080/structure'

  constructor(private http: HttpClient) { }

  createStructure(sousstructure: Structure): Observable<Structure>{
    return this.http.post<Structure>(this.url+ '/create',sousstructure);
  }

  getStructure(): Observable<Structure[]>{
    return this.http.get<Structure[]>(this.url+ '/read');
  }

  deletestructure(id: any): Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`)
  }

  postStructure(data: any): Observable<any>{
    // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
    return this.http.post<any>(this.url+'/create', data)
   
   }
}
