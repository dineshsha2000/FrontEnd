import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SprintComponent } from './sprint/sprint.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
<<<<<<< HEAD
import { TeamissueComponent } from './teamissue/teamissue.component';
=======
>>>>>>> 119f12d613ed6517b650fe1837d2f38bc13557aa

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SprintComponent,
    ProfileComponent,
    CreateIssueComponent,
    LoginComponent,
<<<<<<< HEAD
    IssuesComponent,
    TeamissueComponent
=======
    IssuesComponent

>>>>>>> 119f12d613ed6517b650fe1837d2f38bc13557aa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[
    CreateIssueComponent
  ]
})
export class AppModule { }
