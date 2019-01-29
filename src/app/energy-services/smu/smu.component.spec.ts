import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmuComponent } from './smu.component';

describe('SmuComponent', () => {
  let component: SmuComponent;
  let fixture: ComponentFixture<SmuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
