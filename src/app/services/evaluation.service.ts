import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from '../models/evaluation';
import { Agent } from '../models/agent';
import { Matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  

  url: string ='http://localhost:8080/api'

  constructor(private http: HttpClient) { }

getEvaluation(): Observable<Evaluation[]>{
  return this.http.get<Evaluation[]>(this.url+ '/read');
}


getAgent(): Observable<Agent[]>{
  return this.http.get<Agent[]>(this.url+ '/evaluation/agent');
}

getMatiere(): Observable<Matiere[]>{
  return this.http.get<Matiere[]>(this.url+ '/evaluation/matiere');
}

createEvaluation(evaluation: Evaluation): Observable<Evaluation>{
  return this.http.post<Evaluation>(this.url+ '/evaluation/create',evaluation);
}

postEvaluation(data: any): Observable<any>{
 // return this.http.post<any>(`${environment.apiUrl}/${environment.prefix}/sousstructues`, data)
 return this.http.post<any>(this.url+'/evaluation/create', data)

}

//actualisersousstructure(sousstructure: SousStructure): Observable<SousStructure>{
  // return this.http.put<SousStructure>(this.url+'/modifier'+sousstructure.id,sousstructure)
 //}


obtenirEvaluation(id: number): Observable<Evaluation>{
  return this.http.get<Evaluation>(this.url+'/'+id);
}


//deleteSousstructureby(id:number): Observable<any>{
 // return this.http.delete<any>(this.url+'/delete/'+id)
//}

getEvaluationPaging(params: any): Observable<any> {
  return this.http.get<any>(this.url+`/evaluation/paging`, {params})
}

deleteEvaluation(id: any): Observable<any> {
  return this.http.delete<any>(this.url+`/delete/${id}`)
}

updateEvaluation(data:any, id: number): Observable<any> {
  return this.http.put<any>(this.url+`/update/${id}`, data)
}

}
