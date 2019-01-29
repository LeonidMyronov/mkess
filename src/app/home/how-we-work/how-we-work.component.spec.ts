import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeWorkComponent } from './how-we-work.component';

describe('HowWeWorkComponent', () => {
  let component: HowWeWorkComponent;
  let fixture: ComponentFixture<HowWeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
