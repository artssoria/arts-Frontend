import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewhardysoftskillComponent } from './components/hardysoft/newhardysoftskill.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HardysoftComponent } from './components/hardysoft/hardysoft.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'hardysoftskill', component: HardysoftComponent},
  { path: 'nuevahardysoftskill', component: NewhardysoftskillComponent},
  {path: 'nuevapro', component: NewproyectoComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }