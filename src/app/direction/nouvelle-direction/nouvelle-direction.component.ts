import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Direction } from '../../models/direction';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-nouvelle-direction',
  templateUrl: './nouvelle-direction.component.html',
  styleUrl: './nouvelle-direction.component.scss'
})
export class NouvelleDirectionComponent implements OnInit{

  formdirection! : FormGroup;
  submmitted: boolean= false;
  
  direction: Direction = new Direction();

constructor(
 
 private fb:FormBuilder,
 private directionService :DirectionService)  {}



ngOnInit(): void{
    // this.sousstructureservice.getStructure()
      //   .subscribe(response => this.structures = response);

         this.formdirection= this.fb.group({
           nom:['', Validators.required],
           
         })
}

get f(){
 return this.formdirection.controls;
}

createstructure(){
  this.directionService.createDirection(this.direction)
      .subscribe(response => console.log("bien"))
}


submit():void{
 this.submmitted= true;
if(this.formdirection.invalid){
 return;
}else{
        this.directionService.postDirection(this.formdirection.value).subscribe(data =>{
         this.formdirection.reset();
        },err =>{
         console.log(err)
        });
  
}
 
}

}
