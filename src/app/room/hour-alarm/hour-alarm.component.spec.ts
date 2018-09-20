import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourAlarmComponent } from './hour-alarm.component';

describe('HourAlarmComponent', () => {
  let component: HourAlarmComponent;
  let fixture: ComponentFixture<HourAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourAlarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
