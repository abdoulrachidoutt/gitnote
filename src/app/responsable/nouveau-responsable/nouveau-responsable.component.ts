import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Responsable } from '../../models/responsable';
import { ResponsableService } from '../../services/responsable.service';
import { Agent } from '../../models/agent';

@Component({
  selector: 'app-nouveau-responsable',
  templateUrl: './nouveau-responsable.component.html',
  styleUrl: './nouveau-responsable.component.scss'
})
export class NouveauResponsableComponent implements OnInit{


  formresponsable! : FormGroup;
  submmitted: boolean= false;
  responsable: Responsable = new Responsable();
  agents: Agent[]=[];

constructor(
 
 private fb:FormBuilder,
 private responsableservice :ResponsableService)  {}



ngOnInit(): void{
    // this.sousstructureservice.getStructure()
      //   .subscribe(response => this.structures = response);

         this.formresponsable= this.fb.group({
           motdepasse:['', Validators.required],
           agentId:['', Validators.required],
           
         })
}

get f(){
 return this.formresponsable.controls;
}

createstructure(){
  this.responsableservice.createResponsable(this.responsable)
      .subscribe(response => console.log("bien"))
}


submit():void{
 this.submmitted= true;
if(this.formresponsable.invalid){
 return;
}else{
        this.responsableservice.postResponsable(this.formresponsable.value).subscribe(data =>{
         this.formresponsable.reset();
        },err =>{
         console.log(err)
        });
  
}
 
}


}
