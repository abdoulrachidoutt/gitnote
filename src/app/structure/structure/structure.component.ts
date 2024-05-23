import { Component } from '@angular/core';
import { Structure } from '../../models/structure';
import { StructureService } from '../../services/structure.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.scss'
})
export class StructureComponent {


  
  listStructure: any =  []
    CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;
structure: Structure[] =[];

  constructor(private structureservice: StructureService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.structureservice.getStructure()
          .subscribe(response => this.structure = response);

         //this.getSousstructurePaging();
  }


  nouvelagent(): void {
    this.router.navigate(['addstructure']);
  }

  deleteAgent(id:number){
    this.structureservice.deletestructure(id)
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

  onDelete = (structureId: number) => {

    if(confirm('Are you sure you want to delete this structure')){
     this.structureservice.deletestructure(structureId).subscribe(response => {
       console.log("Suppression reussie!!!");
       this.structureservice.getStructure();
       // this.getSousstructurePaging();
       }, error=> console.log(error));
    }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}

}
