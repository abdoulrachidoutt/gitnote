import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Structure } from '../../models/structure';
import { StructureService } from '../../services/structure.service';

@Component({
  selector: 'app-nouvelle-structure',
  templateUrl: './nouvelle-structure.component.html',
  styleUrl: './nouvelle-structure.component.scss'
})
export class NouvelleStructureComponent implements OnInit{



  formstructure! : FormGroup;
  submmitted: boolean= false;
  structures: Structure = new Structure();

constructor(
 
 private fb:FormBuilder,
 private structureservice :StructureService)  {}



ngOnInit(): void{
    // this.sousstructureservice.getStructure()
      //   .subscribe(response => this.structures = response);

         this.formstructure= this.fb.group({
           nom:['', Validators.required],
           
         })
}

get f(){
 return this.formstructure.controls;
}

createstructure(){
  this.structureservice.createStructure(this.structures)
      .subscribe(response => console.log("bien"))
}


submit():void{
 this.submmitted= true;
if(this.formstructure.invalid){
 return;
}else{
        this.structureservice.postStructure(this.formstructure.value).subscribe(data =>{
         this.formstructure.reset();
        },err =>{
         console.log(err)
        });
  
}
 
}




}
