import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-dashboard',
  templateUrl: './q-dashboard.component.html',
  styleUrls: ['./q-dashboard.component.css']
})
export class QDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onStart(loadQuestion: string) {
    console.log('Load this question : ', loadQuestion);
  }

}
