import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evaluation } from '../../models/evaluation';
import { Matiere } from '../../models/matiere';
import { Agent } from '../../models/agent';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-nouvelle-evaluation',
  templateUrl: './nouvelle-evaluation.component.html',
  styleUrl: './nouvelle-evaluation.component.scss'
})
export class NouvelleEvaluationComponent implements OnInit{


  formEvaluation! : FormGroup;
   submmitted: boolean= false;
   evaluation: Evaluation = new Evaluation();
//sousstructures: SousStructure[]=[];

agent: Agent[]=[];
matiere: Matiere[]=[]

constructor(
  
  private fb:FormBuilder,
  private evaluationservice :EvaluationService)  {}



ngOnInit(): void{
      this.evaluationservice.getAgent()
          .subscribe(response => this.agent = response);

          this.evaluationservice.getMatiere()
          .subscribe(response => this.matiere = response);

          this.formEvaluation= this.fb.group({
            
           
            agentId: ['',Validators.required],
            matiereId: ['',Validators.required],
            moy:['', Validators.required],
          })
}

get f(){
  return this.formEvaluation.controls;
}

createEvaluation(){
   this.evaluationservice.createEvaluation(this.evaluation)
       .subscribe(response => console.log("bien"))
}


submit():void{
  this.submmitted= true;
 if(this.formEvaluation.invalid){
  return;
 }else{
         this.evaluationservice.postEvaluation(this.formEvaluation.value).subscribe(data =>{
          this.formEvaluation.reset();
         },err =>{
          console.log(err)
         });
   
 }
  
}
}
