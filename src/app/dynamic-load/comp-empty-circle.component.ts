import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-empty-circle',
  template: `<img class="mx-3" height="30" width="30" src="assets/img/mybackyardlab/empty-circle.svg" alt="">`,
  styles: [``]
})
export class CompEmptyCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
