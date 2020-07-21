import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QDashboardComponent } from './q-dashboard.component';

describe('QDashboardComponent', () => {
  let component: QDashboardComponent;
  let fixture: ComponentFixture<QDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
