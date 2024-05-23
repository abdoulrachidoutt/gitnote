import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SousStructure } from '../models/sous-structure';
import { Structure } from '../models/structure';
import { environment } from '../environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class SousStructureService {

  url: string ='http://localhost:8080/sousstructures'

  constructor(private http: HttpClient) { }

getSousStructure(): Observable<SousStructure[]>{
  return this.http.get<SousStructure[]>(this.url+ '/read');
}


getStructure(): Observable<Structure[]>{
  return this.http.get<Structure[]>(this.url+ '/structure');
}

createSousStructure(sousstructure: SousStructure): Observable<SousStructure>{
  return this.http.post<SousStructure>(this.url+ '/create',sousstructure);
}

postSousStructure(data: any): Observable<any>{
 // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
 return this.http.post<any>(`${environment.apiUrl}/create`, data)

}

actualisersousstructure(sousstructure: SousStructure): Observable<SousStructure>{
  return this.http.put<SousStructure>(this.url+'/modifier'+sousstructure.id,sousstructure)
}


obtenirSousstructure(id: number): Observable<SousStructure>{
  return this.http.get<SousStructure>(this.url+'/'+id);
}


deleteSousstructureby(id:number): Observable<any>{
  return this.http.delete<any>(this.url+'/delete/'+id)
}

getSousstructurePaging(params: any): Observable<any> {
  return this.http.get<any>(this.url+'/sousstructure/paging', {params})
}

deleteSousstructure(id: any): Observable<any> {
  return this.http.delete<any>(`${environment.apiUrl}/delete/${id}`)
}

updateSousstructure(data:any, id: number): Observable<any> {
  return this.http.put<any>(`${environment.apiUrl}/update/${id}`, data)
}

}
