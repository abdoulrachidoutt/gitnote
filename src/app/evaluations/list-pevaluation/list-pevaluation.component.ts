import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EvaluationsService } from '../../services/evaluations.service';
import { Evaluations } from '../../models/evaluations';

@Component({
  selector: 'app-list-pevaluation',
  templateUrl: './list-pevaluation.component.html',
  styleUrl: './list-pevaluation.component.scss'
})
export class ListPevaluationComponent implements OnInit {
  commandeListe!:any;
  constructor( private service :EvaluationsService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    ) { }

  ngOnInit() {
    
    this.refreshListe();
    
  }
refreshListe(){
  this.service.getAll().subscribe(
    response =>{this.commandeListe = response;}
   );

}

  openForEdit(Id:number){
   this.router.navigate(['/commandes/modification/'+Id]);
  }

  removeData(id: number) {
    
  }

  onCommandeDelete(id:number){
  
}

selectCommande(item :Evaluations){
  this.service.formData = this.fb.group(Object.assign({},item));
  
  this.router.navigate(['/evaluations']);
}

}
