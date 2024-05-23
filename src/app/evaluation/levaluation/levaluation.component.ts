import { Component } from '@angular/core';
import { Evaluation } from '../../models/evaluation';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-levaluation',
  templateUrl: './levaluation.component.html',
  styleUrl: './levaluation.component.scss'
})
export class LevaluationComponent {
  listEvaluation: Evaluation[] =  []
  CURRENTINDEX=-1;
PAGE=0;
count=0;
PAGESIZE=3;
evaluation: Evaluation[] =[];

constructor(private evaluationservice: EvaluationService,
      private router:Router
){}

ngOnInit(): void {
    this.evaluationservice.getEvaluation()
        .subscribe(response => this.evaluation = response);

       //this.getAgentPaging();
}


nouvelleevaluation(): void {
  this.router.navigate(['addevaluation']);
}

deleteEvaluation(id:number){
  this.evaluationservice.deleteEvaluation(id)
}

getRequestParams(page:number, pageSize: number): any {

  let params: any = {};
  if(page) {
   params['page'] = page - 1;
  }

  if(pageSize) {
    params['size'] =  pageSize;
  }
  return params;
}


getEvaluationPaging(): void {

  const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);

  this.evaluationservice.getEvaluationPaging(params)
      .subscribe({
        next: (response:any)=>{

          const {evaluationn, totalItems} = response;
          this.evaluation =  evaluationn;
          this.count = totalItems;

        },
        error:(err:any) => console.log(err)
      }
    )
      
}


//handlePageChange (event: number) {
//  this.PAGE  =  event;
 // this.getSousstructurePaging();
//}

// handleSizePageChange (event: any) {
//  this.PAGESIZE  = event.target.value;
 // this.PAGE  = 1 ;
 // this.getSousstructurePaging();
// }

onDelete = (evaluationId: number) => {

 if(confirm('Are you sure you want to delete this agent')){
    this.evaluationservice.deleteEvaluation(evaluationId).subscribe(response => {
     console.log("Suppression reussie!!!");
     this.evaluationservice.getAgent();
      //this.getSousstructurePaging();
   }, error=> console.log(error));
 }
}

// onUpdate = (employee: any) => {
  //this.employeeEmitted.emit(employee);
//}
}
