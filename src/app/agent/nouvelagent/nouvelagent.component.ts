import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agent } from '../../models/agent';
import { SousStructure } from '../../models/sous-structure';
import { StructureService } from '../../services/structure.service';
import { AgentService } from '../../services/agent.service';
import { Direction } from '../../models/direction';

@Component({
  selector: 'app-nouvelagent',
  templateUrl: './nouvelagent.component.html',
  styleUrl: './nouvelagent.component.scss'
})
export class NouvelagentComponent implements OnInit{


  formAgent! : FormGroup;
   submmitted: boolean= false;
agent: Agent = new Agent();
//sousstructures: SousStructure[]=[];

directions: Direction[]=[];

constructor(
  
  private fb:FormBuilder,
  private agentservice : AgentService)  {}



ngOnInit(): void{
      this.agentservice.getDirection()
          .subscribe(response => this.directions = response);

          this.formAgent= this.fb.group({
            matricule:['', Validators.required],
            nom:['', Validators.required],
            prenom:['', Validators.required],
            tel:['', Validators.required],
            directionId: ['',Validators.required]
          })
}

get f(){
  return this.formAgent.controls;
}

createAgent(){
   this.agentservice.createAgent(this.agent)
       .subscribe(response => console.log("bien"))
}


submit():void{
  this.submmitted= true;
 if(this.formAgent.invalid){
  return;
 }else{
         this.agentservice.postAgent(this.formAgent.value).subscribe(data =>{
          this.formAgent.reset();
         },err =>{
          console.log(err)
         });
   
 }
  
}

}
