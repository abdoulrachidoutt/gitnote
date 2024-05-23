import { Component, Directive, OnInit } from '@angular/core';
import { Agent } from '../../models/agent';
import { EvaluationsService } from '../../services/evaluations.service';
import { LevaluationsService } from '../../services/levaluations.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { AgentService } from '../../services/agent.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Levaluations } from '../../models/levalutions';
import { AddPevaluationComponent } from '../add-pevaluation/add-pevaluation.component';


@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  
  styleUrl: './add-evaluation.component.scss',
  host: {ngSkipHydration: 'true'},

})
export class AddEvaluationComponent implements OnInit {
  AgentList: Agent[]=[];
  isValid:boolean = true;
  matiereService: any;
  Date!:any;
  agent   : any= {};
  annee  = 0;
  constructor(public service:EvaluationsService,
    public levaluationservice:LevaluationsService,
    private dialog:MatDialog,public fb: FormBuilder,
    public agentService :AgentService,
    private toastr :ToastrService,
    private router :Router,
    private currentRoute: ActivatedRoute,
   ) { }
    get f() { return this.service.formData.controls }
   
ngOnInit() {

   if (this.service.choixmenu == "A"){
    this.InfoForm();
    this.service.list = [];
    
    
    this.f['annee'].setValue(this.annee);
    
    }
      else
    {
    //this.service.getData(this.service.formData.value.id).subscribe(res=> {
   // this.service.formData =this.fb.group(Object.assign({},res));
   // });
    this.levaluationservice.getAll(this.service.formData.value.id).subscribe(
     response =>{this.service.list = response}
     );
     this.f['date_eval'].setValue(this.service.formData.value.date_eval);
    }

this.agentService.getAgent().subscribe(
  response =>{this.AgentList = response;}
 );
  }


  



   
    
InfoForm() {
    this.service.formData = this.fb.group({
      id :null,
      annee : 0,
      code_agent : 0,
      nomagent : '',
      date_eval:'',
      avance : 0,
      moy : 0,
      leval :[],
      });
    } 
  
resetForm() {
      this.service.formData.reset();
  }

AddData(levaluationsIndex:any,Id:any){  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data={levaluationsIndex,Id};
    this.dialog.open(AddPevaluationComponent, dialogConfig).afterClosed().subscribe(b10=>{
      this.calcul();
    });
  }

  
onDelete(item : Levaluations,Id:number,i:number){
    if(Id != null)
    this.service.formData.value.id+=Id ;
   this.service.list.splice(i,1);
   this.calcul();
   }

calcul(){
  this.f['moy'].setValue(this.service.list.reduce((prev:any, curr:any) => {
    return prev + curr.moy;
  }, 0));
    
   
   }


onSubmit(){
      this.service.saveOrUpdate(this.service.formData.value).
      subscribe( data => {
        this.toastr.success( 'Validation Faite avec Success'); 
        this.router.navigate(['/evaluations']);
      });
   }
  

OnSelectClient(ctrl:any)
   {
      if(ctrl.selectedIndex == 0){
       this.f['nomagent'].setValue('');
       this.f['code_agent'].setValue('');
      }
      else{
        this.f['nomagent'].setValue(this.AgentList[ctrl.selectedIndex - 1].nom);
         this.f['code_agent'].setValue(this.AgentList[ctrl.selectedIndex - 1].id);
      }
    }
}
