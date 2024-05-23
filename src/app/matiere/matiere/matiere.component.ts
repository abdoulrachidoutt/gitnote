import { Component, OnInit } from '@angular/core';
import { Matiere } from '../../models/matiere';
import { MatiereService } from '../../services/matiere.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrl: './matiere.component.scss'
})
export class MatiereComponent implements OnInit{
 
    CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;

  matiere: Matiere[]=[];

  constructor(private matiereservice: MatiereService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.matiereservice.getMatiere()
          .subscribe(response => this.matiere = response);

         //this.getSousstructurePaging();
  }


  nouvellematiere(): void {
    this.router.navigate(['addmatiere']);
  }

  deleteMatiere(id:number){
    this.matiereservice.deletematiere(id)
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

  onDelete = (matiereId: number) => {

    if(confirm('Are you sure you want to delete this structure')){
     this.matiereservice.deletematiere(matiereId).subscribe(response => {
       console.log("Suppression reussie!!!");
       this.matiereservice.getMatiere();
       // this.getSousstructurePaging();
       }, error=> console.log(error));
    }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}
}
