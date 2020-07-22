import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdComponent, AdItem } from '../dynamic-load/ad-item';
import { EmptyCircleDirective, FilledCircleDirective } from '../dynamic-load/add.directive';
import { CompEmptyCircleComponent } from '../dynamic-load/comp-empty-circle.component';
import { CompFilledCircleComponent } from '../dynamic-load/comp-filled-circle.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  emptyCircles: AdItem[];
  filledCircles: AdItem[];

  @ViewChild(FilledCircleDirective, {static: true}) filledCircle: FilledCircleDirective;
  @ViewChild(EmptyCircleDirective, {static: true}) emptyCircle: EmptyCircleDirective;

  currentEmptyAdIndex = -1;
  currentFilledAdIndex = -1;

  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadCircles();
  }

  onDashboard() {
    this.router.navigate(['/home']);
  }

  loadEmptyComponent() {
    this.currentEmptyAdIndex = (this.currentEmptyAdIndex + 1);
    if (this.currentEmptyAdIndex <= this.emptyCircles.length - 1) {
      const adItem = this.emptyCircles[this.currentEmptyAdIndex];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      const viewContainerRef = this.emptyCircle.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  }

  loadFilledComponent() {
    this.currentFilledAdIndex = (this.currentFilledAdIndex + 1);
    if (this.currentFilledAdIndex <= this.filledCircles.length - 1) {
      const adItem = this.filledCircles[this.currentFilledAdIndex];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      const viewContainerRef = this.filledCircle.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AdComponent>componentRef.instance).data = adItem.data;
    }
  }

  loadCircles() {
    this.emptyCircles = [
      new AdItem(CompEmptyCircleComponent, {key: '1', val: 'one'}),
      new AdItem(CompEmptyCircleComponent, {key: '2', val: 'two'}),
      new AdItem(CompEmptyCircleComponent, {key: '10', val: 'ten'})
    ];

    this.filledCircles = [
      new AdItem(CompFilledCircleComponent, {key: '4', val: 'four'}),
      new AdItem(CompFilledCircleComponent, {key: '5', val: 'five'}),
      new AdItem(CompFilledCircleComponent, {key: '6', val: 'six'}),
      new AdItem(CompFilledCircleComponent, {key: '7', val: 'seven'})
    ];
  }

}
