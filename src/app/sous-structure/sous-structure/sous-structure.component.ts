import { Component, OnInit } from '@angular/core';
import { SousStructureService } from '../../services/sous-structure.service';
import { SousStructure } from '../../models/sous-structure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sous-structure',
  templateUrl: './sous-structure.component.html',
  styleUrl: './sous-structure.component.scss'
})
export class SousStructureComponent implements OnInit{
  listSousstructure: any =  []
  CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;
sousstructures: SousStructure[] =[];

  constructor(private sousstructureservice: SousStructureService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.sousstructureservice.getSousStructure()
          .subscribe(response => this.sousstructures = response);

     //    this.getSousstructurePaging();
  }


  nouvellesousstructures(): void {
    this.router.navigate(['addsousstructure']);
  }

  deleteSousstructure(id:number){
    this.sousstructureservice.deleteSousstructure(id)
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

    const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);

    this.sousstructureservice.getSousstructurePaging(params)
        .subscribe({
          next: (response:any)=>{

          const {sousstructure, totalItems} = response;
          this.listSousstructure =  sousstructure;
          this.count = totalItems;

        }, 
        error:(err:any) => console.log(err)
      
        }
      )
      
    
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

  onDelete = (sousstructureId: number) => {

   if(confirm('Are you sure you want to delete this soustructure')){
      this.sousstructureservice.deleteSousstructure(sousstructureId).subscribe(response => {
        console.log("Suppression reussie!!!");
        this.sousstructureservice.getSousStructure();
      //  this.getSousstructurePaging();
       }, error=> console.log(error));
    }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}

}
