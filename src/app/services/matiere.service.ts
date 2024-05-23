import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  url: string ='http://localhost:8080/api/matiere'

  constructor(private http: HttpClient) { }

getMatiere(): Observable<Matiere[]>{
  return this.http.get<Matiere[]>(this.url+ '/read');
}


//getStructure(): Observable<Direction[]>{
  //return this.http.get<Structure[]>(this.url+ '/structure');
//}

createMatiere(matiere: Matiere): Observable<Matiere>{
  return this.http.post<Matiere>(this.url+ '/create',matiere);
}

postMatiere(data: any): Observable<any>{
 // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
 return this.http.post<any>(this.url+ '/create', data)

}

//actualisersousstructure(sousstructure: Direction): Observable<Direction>{
  //return this.http.put<SousStructure>(this.url+'/modifier'+sousstructure.id,sousstructure)
//}


obtenirMatiere(id: number): Observable<Matiere>{
  return this.http.get<Matiere>(this.url+'/'+id);
}


deleteSousstructureby(id:number): Observable<any>{
  return this.http.delete<any>(this.url+'/delete/'+id)
}

getSousstructurePaging(params: any): Observable<any> {
  return this.http.get<any>(this.url+'/sousstructure/paging', {params})
}

deletematiere(id: any): Observable<any> {
  return this.http.delete<any>(this.url+`/delete/${id}`)
}

//updateDirection(data:any, id: number): Observable<any> {
  //return this.http.put<any>(`${environment.apiUrl}/update/${id}`, data)
//}
}
