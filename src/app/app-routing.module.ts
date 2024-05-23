import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { SousStructureComponent } from './sous-structure/sous-structure/sous-structure.component';
import { NouvelleSousStructureComponent } from './sous-structure/nouvelle-sous-structure/nouvelle-sous-structure.component';
import { NouvelagentComponent } from './agent/nouvelagent/nouvelagent.component';
import { AgentComponent } from './agent/agent/agent.component';
import { NouvelleStructureComponent } from './structure/nouvelle-structure/nouvelle-structure.component';
import { StructureComponent } from './structure/structure/structure.component';
import { NouveauResponsableComponent } from './responsable/nouveau-responsable/nouveau-responsable.component';
import { ResponsableComponent } from './responsable/responsable/responsable.component';
import { NouvelleDirectionComponent } from './direction/nouvelle-direction/nouvelle-direction.component';
import { DirectionComponent } from './direction/direction/direction.component';
import { NouvelleMatiereComponent } from './matiere/nouvelle-matiere/nouvelle-matiere.component';
import { MatiereComponent } from './matiere/matiere/matiere.component';
import { NouvelleEvaluationComponent } from './evaluation/nouvelle-evaluation/nouvelle-evaluation.component';
import { LevaluationComponent } from './evaluation/levaluation/levaluation.component';
import { AddEvaluationComponent } from './evaluations/add-evaluation/add-evaluation.component';
import { AddPevaluationComponent } from './evaluations/add-pevaluation/add-pevaluation.component';
import { ListEvaluationComponent } from './evaluations/list-evaluation/list-evaluation.component';
import { ListPevaluationComponent } from './evaluations/list-pevaluation/list-pevaluation.component';
import { LevaluationssComponent } from './evaluations/levaluationss/levaluationss.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    
    children: [
      {
        path: 'statistiques',
        component: StatistiqueComponent,
        
      },
      {
        path: 'sousstructure',
        component: SousStructureComponent,
        
      },
      {
        path: 'addsousstructure',
        component: NouvelleSousStructureComponent,
        
      },
      {
        path: 'addagent',
        component: NouvelagentComponent,
        
      },
      {
        path: 'agent',
        component: AgentComponent,
        
      },
      {
        path: 'addstructure',
        component: NouvelleStructureComponent,
        
      },
      {
        path: 'structure',
        component: StructureComponent,
        
      },
      {
        path: 'addresponsable',
        component: NouveauResponsableComponent,
        
      },
      {
        path: 'responsable',
        component: ResponsableComponent,
        
      },
      {
        path: 'adddirection',
        component: NouvelleDirectionComponent,
        
      },
      {
        path: 'direction',
        component: DirectionComponent,
        
      },
      {
        path: 'addmatiere',
        component: NouvelleMatiereComponent,
        
      },
      {
        path: 'matiere',
        component: MatiereComponent,
        
      },
      {
        path: 'addevaluation',
        component: NouvelleEvaluationComponent,
        
      },
      {
        path: 'levaluation',
        component: LevaluationComponent,
        
      },
      {
        path: 'addevaluations',
        component: AddEvaluationComponent,
        
      },
      {
        path: 'addpevaluations',
        component: AddPevaluationComponent,
        
      },
      {
        path: 'evaluations',
        component: ListEvaluationComponent,
        
      },
      {
        path: 'levaluations',
        component: ListPevaluationComponent,
        
      },
      {
        path: 'levaluationss',
        component: LevaluationssComponent,
        
      }
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
