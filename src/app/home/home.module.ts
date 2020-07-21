import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { NavbarComponent } from '../shared/navbar/navbar.component';
import { QuestionComponent } from '../question/question.component';
import { QDashboardComponent } from '../q-dashboard/q-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
    ],
    declarations: [
        HomeComponent,
        NavbarComponent,
        QuestionComponent,
        QDashboardComponent,
    ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
