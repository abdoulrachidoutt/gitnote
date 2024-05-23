import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

 


  url: string ='http://localhost:8080/api/direction'

  constructor(private http: HttpClient) { }

getDirection(): Observable<Direction[]>{
  return this.http.get<Direction[]>(this.url+ '/read');
}


//getStructure(): Observable<Direction[]>{
  //return this.http.get<Structure[]>(this.url+ '/structure');
//}

createDirection(direction: Direction): Observable<Direction>{
  return this.http.post<Direction>(this.url+ '/create',direction);
}

postDirection(data: any): Observable<any>{
 // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
 return this.http.post<any>(this.url+ '/create', data)

}

//actualisersousstructure(sousstructure: Direction): Observable<Direction>{
  //return this.http.put<SousStructure>(this.url+'/modifier'+sousstructure.id,sousstructure)
//}


obtenirDirection(id: number): Observable<Direction>{
  return this.http.get<Direction>(this.url+'/'+id);
}


deleteSousstructureby(id:number): Observable<any>{
  return this.http.delete<any>(this.url+'/delete/'+id)
}

getSousstructurePaging(params: any): Observable<any> {
  return this.http.get<any>(this.url+'/sousstructure/paging', {params})
}

deleteDirection(id: any): Observable<any> {
  return this.http.delete<any>(this.url+`/delete/${id}`)
}

//updateDirection(data:any, id: number): Observable<any> {
  //return this.http.put<any>(`${environment.apiUrl}/update/${id}`, data)
//}
}
