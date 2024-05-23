import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environnements/environnement';
import { Agent } from '../models/agent';
import { SousStructure } from '../models/sous-structure';
import { Direction } from '../models/direction';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  url: string ='http://localhost:8080/api'

  constructor(private http: HttpClient) { }

getAgent(): Observable<Agent[]>{
  return this.http.get<Agent[]>(this.url+ '/read');
}


getDirection(): Observable<Direction[]>{
  return this.http.get<Direction[]>(this.url+ '/direction');
}

createAgent(agent: Agent): Observable<Agent>{
  return this.http.post<Agent>(this.url+ '/create',agent);
}

postAgent(data: any): Observable<any>{
 // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
 return this.http.post<any>(this.url+'/create', data)

}

//actualisersousstructure(sousstructure: SousStructure): Observable<SousStructure>{
  // return this.http.put<SousStructure>(this.url+'/modifier'+sousstructure.id,sousstructure)
 //}


obtenirAgent(id: number): Observable<Agent>{
  return this.http.get<Agent>(this.url+'/'+id);
}


//deleteSousstructureby(id:number): Observable<any>{
 // return this.http.delete<any>(this.url+'/delete/'+id)
//}

getAgentPaging(params: any): Observable<any> {
  return this.http.get<any>(this.url+`/agent/paging`, {params})
}

deleteAgent(id: any): Observable<any> {
  return this.http.delete<any>(this.url+`/delete/${id}`)
}

updateAgent(data:any, id: number): Observable<any> {
  return this.http.put<any>(`${environment.apiUrl}/update/${id}`, data)
}

}
