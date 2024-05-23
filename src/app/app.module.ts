import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MenuComponent } from './composant/menu/menu.component';
import { HeaderComponent } from './composant/header/header.component';
import { PaginationComponent } from './composant/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { SousStructureComponent } from './sous-structure/sous-structure/sous-structure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DemoAngularMaterailModule } from './DemoAngularMaterialModule';
import { CommonModule } from '@angular/common';
import { NouvelleSousStructureComponent } from './sous-structure/nouvelle-sous-structure/nouvelle-sous-structure.component';
import { SousStructureService } from './services/sous-structure.service';
import { StructureService } from './services/structure.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BouttonActionComponent } from './composant/boutton-action/boutton-action.component';
import { AgentComponent } from './agent/agent/agent.component';
import { NouvelagentComponent } from './agent/nouvelagent/nouvelagent.component';
import { StructureComponent } from './structure/structure/structure.component';
import { NouvelleStructureComponent } from './structure/nouvelle-structure/nouvelle-structure.component';
import { ResponsableComponent } from './responsable/responsable/responsable.component';
import { NouveauResponsableComponent } from './responsable/nouveau-responsable/nouveau-responsable.component';
import { DirectionComponent } from './direction/direction/direction.component';
import { NouvelleDirectionComponent } from './direction/nouvelle-direction/nouvelle-direction.component';
import { MatiereComponent } from './matiere/matiere/matiere.component';
import { NouvelleMatiereComponent } from './matiere/nouvelle-matiere/nouvelle-matiere.component';
import { NouvelleEvaluationComponent } from './evaluation/nouvelle-evaluation/nouvelle-evaluation.component';
import { LevaluationComponent } from './evaluation/levaluation/levaluation.component';
import { AddEvaluationComponent } from './evaluations/add-evaluation/add-evaluation.component';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { ListEvaluationComponent } from './evaluations/list-evaluation/list-evaluation.component';
import { ListPevaluationComponent } from './evaluations/list-pevaluation/list-pevaluation.component';
import { AddPevaluationComponent } from './evaluations/add-pevaluation/add-pevaluation.component';
import { DatePipe } from '@angular/common';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { LevaluationssComponent } from './evaluations/levaluationss/levaluationss.component';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatistiqueComponent,
    MenuComponent,
    HeaderComponent,
    PaginationComponent,
    SousStructureComponent,
    NouvelleSousStructureComponent,
    BouttonActionComponent,
    AgentComponent,
    NouvelagentComponent,
    StructureComponent,
    NouvelleStructureComponent,
    ResponsableComponent,
    NouveauResponsableComponent,
    DirectionComponent,
    NouvelleDirectionComponent,
    MatiereComponent,
    NouvelleMatiereComponent,
    NouvelleEvaluationComponent,
    LevaluationComponent,
    AddEvaluationComponent,
    ListEvaluationComponent,
    ListPevaluationComponent,
    AddPevaluationComponent,
    LevaluationssComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAngularMaterailModule,
    MatFormField,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    DatePipe
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    SousStructureService,
    StructureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
