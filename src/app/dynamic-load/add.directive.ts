import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[empty-circle]',
})
export class EmptyCircleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[filled-circle]',
})
export class FilledCircleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
