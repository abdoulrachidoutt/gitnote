import { Component, OnInit } from '@angular/core';
import { EvaluationsService } from '../../services/evaluations.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Evaluations } from '../../models/evaluations';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrl: './list-evaluation.component.scss',
  host: {ngSkipHydration: 'true'},

})
export class ListEvaluationComponent implements OnInit {
  listeevaluation!:any;

  constructor( private service :EvaluationsService,private router:Router,
    private toastr :ToastrService,public fb: FormBuilder,
   ) { }

  ngOnInit() {
    
    this.refreshListe();
    
  }
refreshListe(){
  this.service.getAll().subscribe(
    response =>{this.listeevaluation = response;}
   );

}


  onDelete(id: number) {
   
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.service.deleteAll(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning(' data successfully deleted!'); 
            this.refreshListe();
          },
          error => console.log(error));
    }
  }
neweval()
  {
    this.service.choixmenu ="A"
  this.router.navigate(['/addevaluations']);
  }

onSelect(item :Evaluations){
  
  this.service.formData = this.fb.group(Object.assign({},item));
  this.service.choixmenu ="M"
  this.router.navigate(['/addevaluations']);
}

}
