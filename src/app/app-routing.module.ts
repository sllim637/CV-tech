import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { FormComponent } from './carte-visite/form/form.component';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './cv/details/details.component';
import { FormAuthComponent } from './form-auth/form-auth.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';


const appRoutes: Routes = [
  { path: 'CVs', component: CvComponent },
  { path: 'Cvs/details/:id', component: DetailsComponent },
  { path: 'Mini-word', component: MiniWordComponent },
  {path : 'router-simulator' , component : RouterSimulatorComponent},
  {path : 'Authentification' , component: FormAuthComponent },
  {path : 'create-cv' , component : FormComponent},
  {path : '**' , redirectTo:"CVs"}
  
]



@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
