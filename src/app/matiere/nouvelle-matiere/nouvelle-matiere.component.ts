import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Matiere } from '../../models/matiere';
import { MatiereService } from '../../services/matiere.service';

@Component({
  selector: 'app-nouvelle-matiere',
  templateUrl: './nouvelle-matiere.component.html',
  styleUrl: './nouvelle-matiere.component.scss'
})
export class NouvelleMatiereComponent implements OnInit{

  formmatiere! : FormGroup;
  submmitted: boolean= false;
  
  matiere: Matiere = new Matiere();

constructor(
 
 private fb:FormBuilder,
 private matiereService :MatiereService)  {}



ngOnInit(): void{
    // this.sousstructureservice.getStructure()
      //   .subscribe(response => this.structures = response);

         this.formmatiere= this.fb.group({
           nom:['', Validators.required],
           coef:['', Validators.required],
           
         })
}

get f(){
 return this.formmatiere.controls;
}

createMatiere(){
  this.matiereService.createMatiere(this.matiere)
      .subscribe(response => console.log("bien"))
}


submit():void{
 this.submmitted= true;
if(this.formmatiere.invalid){
 return;
}else{
        this.matiereService.postMatiere(this.formmatiere.value).subscribe(data =>{
         this.formmatiere.reset();
        },err =>{
         console.log(err)
        });
  
}
 
}
}
