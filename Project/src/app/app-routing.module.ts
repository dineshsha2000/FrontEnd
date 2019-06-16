import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';
import {ProfileComponent} from './profile/profile.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
<<<<<<< HEAD
import { TeamissueComponent } from './teamissue/teamissue.component';
=======
>>>>>>> 119f12d613ed6517b650fe1837d2f38bc13557aa

const routes: Route[]= [
  {path:'sprint',component:SprintComponent,
children:[
  {path:'issue', component:CreateIssueComponent}
  
]},
  {path:'issues',component:IssuesComponent},
<<<<<<< HEAD
  {path:'teamissue',component:TeamissueComponent},
=======
>>>>>>> 119f12d613ed6517b650fe1837d2f38bc13557aa
  {path:'profile', component: ProfileComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
