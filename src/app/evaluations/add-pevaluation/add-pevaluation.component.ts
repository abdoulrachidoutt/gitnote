import { Component, Inject, OnInit } from '@angular/core';
import { Matiere } from '../../models/matiere';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LevaluationsService } from '../../services/levaluations.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatiereService } from '../../services/matiere.service';
import { EvaluationService } from '../../services/evaluation.service';
import { Levaluations } from '../../models/levalutions';
import { EvaluationsService } from '../../services/evaluations.service';

@Component({
  selector: 'app-add-pevaluation',
  templateUrl: './add-pevaluation.component.html',
  styleUrl: './add-pevaluation.component.scss'
})
export class AddPevaluationComponent implements OnInit {
  formData!: FormGroup;
  matiereList!:Matiere[];
  isValid:boolean=true;
  
  wtottva = 0;
  
  constructor( public service:LevaluationsService,private toastr :ToastrService,
        @Inject(MAT_DIALOG_DATA)  public data:any,
        public dialogRef:MatDialogRef<AddPevaluationComponent>,
        private matiereService:MatiereService,
        private evalService:EvaluationsService,public fb: FormBuilder){}
        get f() { return this.formData.controls; }
       

  ngOnInit() {
    if(this.data.levaluationsIndex==null)
    {
      this.InfoForm();
    }
    else 
    {
     this.formData =this.fb.group(Object.assign({},this.evalService.list[this.data.levaluationsIndex]));
    }
   this.matiereService.getMatiere().subscribe(
      response =>{this.matiereList= response;}
     );
}


InfoForm() {
  this.formData = this.fb.group({
      id: null,
      
      note : 0,
      coef : 0,
      moy : 0,
      
      tottva :0,
      
      nommatiere :'',
      id_matiere :'',
      evalu_id : this.data.id_evalu,
      
    });
  } 


selectPrice(ctrl:any){
  if(ctrl.selectedIndex == 0){
    this.f['coef'].setValue(0);
    this.f['moy'].setValue(0);
    this.f['nommatiere'].setValue('');
    this.f['moy'].setValue(0);
  }
  else{
    this.f['coef'].setValue(this.matiereList[ctrl.selectedIndex-1].coef);
    this.f['nommatiere'].setValue(this.matiereList[ctrl.selectedIndex - 1].nom);
    this.f['id_matiere'].setValue( this.matiereList[ctrl.selectedIndex - 1].id);
  }
  this.cal();
}

cal(){
 
  this.wtottva =  parseFloat((this.formData.value.note * this.formData.value.coef).toFixed(3));
  
  this.f['moy'].setValue(this.wtottva);
  
}

onSubmit() {
  
  if(this.data.lcommandeIndex==null)
  {
    this.evalService.list.push(this.formData.value)
    this.dialogRef.close();
  }
  else
{
  
  this.evalService.list[this.data.lcommandeIndex] = this.formData.value;
}
this.dialogRef.close();

 
}

validateForm(formData:Levaluations){
  this.isValid=true;
  if(formData.nommatiere=='')
    this.isValid=false;
    else if(formData.coef ==0)
    this.isValid=false;
    return this.isValid;
}
}
