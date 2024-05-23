import { Component } from '@angular/core';
import { Responsable } from '../../models/responsable';
import { ResponsableService } from '../../services/responsable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrl: './responsable.component.scss'
})
export class ResponsableComponent {


  listResponsable: any =  []
    CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;
responsable: Responsable[] =[];

  constructor(private responsableservice:ResponsableService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.responsableservice.getResponsable()
          .subscribe(response => this.responsable = response);

         //this.getSousstructurePaging();
  }


  nouveauresponsable(): void {
    this.router.navigate(['addresponsable']);
  }

  deleteAgent(id:number){
    this.responsableservice.deleteResponsable(id)
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

  onDelete = (responsableId: number) => {

    if(confirm('Are you sure you want to delete this responsable')){
      this.responsableservice.deleteResponsable(responsableId).subscribe(response => {
        console.log("Suppression reussie!!!");
        this.responsableservice.getResponsable();
        //this.getSousstructurePaging();
       }, error=> console.log(error));
    }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}
}
