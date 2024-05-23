import { Component, OnInit } from '@angular/core';
import { Direction } from '../../models/direction';
import { Router } from '@angular/router';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrl: './direction.component.scss'
})
export class DirectionComponent implements OnInit{

    CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;

direction: Direction[]=[];

  constructor(private directionservice: DirectionService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.directionservice.getDirection()
          .subscribe(response => this.direction = response);

         //this.getSousstructurePaging();
  }


  nouvelledirection(): void {
    this.router.navigate(['adddirection']);
  }

  deleteDirection(id:number){
    this.directionservice.deleteDirection(id)
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


  getSousstructurePaging(): void {

    //const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);

    //this.agentservice.getAgentPaging(params)
     //   .subscribe(response => {

      //    const {agent, totalItems} = response;
      //    this.listAgent =  agent;
       //   this.count = totalItems;

       // }, error => console.log(error));
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

  onDelete = (directionId: number) => {

    if(confirm('Are you sure you want to delete this structure')){
     this.directionservice.deleteDirection(directionId).subscribe(response => {
       console.log("Suppression reussie!!!");
       this.directionservice.getDirection();
       // this.getSousstructurePaging();
       }, error=> console.log(error));
    }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}

}
