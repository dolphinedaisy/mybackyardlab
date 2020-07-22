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
import { CompEmptyCircleComponent } from '../dynamic-load/comp-empty-circle.component';
import { CompFilledCircleComponent } from '../dynamic-load/comp-filled-circle.component';
import { EmptyCircleDirective, FilledCircleDirective } from '../dynamic-load/add.directive';

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
        CompEmptyCircleComponent,
        CompFilledCircleComponent,
        EmptyCircleDirective,
        FilledCircleDirective
    ],
    exports: [ HomeComponent ],
    entryComponents: [
        CompFilledCircleComponent,
        CompEmptyCircleComponent
    ],
    providers: []
})
export class HomeModule { }
