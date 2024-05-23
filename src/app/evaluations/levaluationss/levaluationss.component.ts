import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from '../../services/evaluations.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Evaluations } from '../../models/evaluations';

@Component({
  selector: 'app-levaluationss',
  templateUrl: './levaluationss.component.html',
  styleUrl: './levaluationss.component.scss',
  host: {ngSkipHydration: 'true'},

})
export class LevaluationssComponent implements OnInit {
  Liste:any;
  constructor( private service :EvaluationsService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
    ) { }

  ngOnInit() {
    
    this.refreshListe();
    
  }
refreshListe(){
  this.service.getAll().subscribe(
    response =>{this.Liste = response;}
   );

}

  openForEdit(Id:number){
   this.router.navigate(['/commandes/modification/'+Id]);
  }

  removeData(id: number) {
    
  }

  onDelete(id:number){
  
}

selectData(item :Evaluations){
  this.service.formData = this.fb.group(Object.assign({},item));
  
  this.router.navigate(['/lcomms']);
}

}
