import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsCalculationComponent } from './fs-calculation.component';

describe('FsCalculationComponent', () => {
  let component: FsCalculationComponent;
  let fixture: ComponentFixture<FsCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
