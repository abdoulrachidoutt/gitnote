import { Component } from '@angular/core';
import { Agent } from '../../models/agent';
import { AgentService } from '../../services/agent.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

  listAgent: Agent[] =  []
    CURRENTINDEX=-1;
  PAGE=0;
  count=0;
  PAGESIZE=3;
agent: Agent[] =[];

  constructor(private agentservice: AgentService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.agentservice.getAgent()
          .subscribe(response => this.agent = response);

         //this.getAgentPaging();
  }


  nouvelagent(): void {
    this.router.navigate(['addagent']);
  }

  deleteAgent(id:number){
    this.agentservice.deleteAgent(id)
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


  getAgentPaging(): void {

    const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);

    this.agentservice.getAgentPaging(params)
        .subscribe({
          next: (response:any)=>{

            const {agentt, totalItems} = response;
            this.agent =  agentt;
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

  onDelete = (agentId: number) => {

   if(confirm('Are you sure you want to delete this agent')){
      this.agentservice.deleteAgent(agentId).subscribe(response => {
       console.log("Suppression reussie!!!");
       this.agentservice.getAgent();
        //this.getSousstructurePaging();
     }, error=> console.log(error));
   }
  }
  
 // onUpdate = (employee: any) => {
    //this.employeeEmitted.emit(employee);
  //}


}
