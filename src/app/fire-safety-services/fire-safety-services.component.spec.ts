import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSafetyServicesComponent } from './fire-safety-services.component';

describe('FireSafetyServicesComponent', () => {
  let component: FireSafetyServicesComponent;
  let fixture: ComponentFixture<FireSafetyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSafetyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSafetyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
