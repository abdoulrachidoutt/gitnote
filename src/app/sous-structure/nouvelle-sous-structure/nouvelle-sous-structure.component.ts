import { Component, OnInit } from '@angular/core';
import { SousStructure } from '../../models/sous-structure';
import { SousStructureService } from '../../services/sous-structure.service';
import { Structure } from '../../models/structure';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouvelle-sous-structure',
  templateUrl: './nouvelle-sous-structure.component.html',
  styleUrl: './nouvelle-sous-structure.component.scss'
})
export class NouvelleSousStructureComponent implements OnInit{

   formSousstructure! : FormGroup;
   submmitted: boolean= false;
sousstructure: SousStructure = new SousStructure();
structures: Structure[]=[];

constructor(
  
  private fb:FormBuilder,
  private sousstructureservice : SousStructureService)  {}



ngOnInit(): void{
      this.sousstructureservice.getStructure()
          .subscribe(response => this.structures = response);

          this.formSousstructure= this.fb.group({
            nom:['', Validators.required],
            structureId: ['',Validators.required]
          })
}

get f(){
  return this.formSousstructure.controls;
}

createSousstructure(){
   this.sousstructureservice.createSousStructure(this.sousstructure)
       .subscribe(response => console.log("bien"))
}


submit():void{
  this.submmitted= true;
 if(this.formSousstructure.invalid){
  return;
 }else{
         this.sousstructureservice.postSousStructure(this.formSousstructure.value).subscribe(data =>{
          this.formSousstructure.reset();
         },err =>{
          console.log(err)
         });
   
 }
  
}
}
