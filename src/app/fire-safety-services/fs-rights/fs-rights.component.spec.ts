import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsRightsComponent } from './fs-rights.component';

describe('FsRightsComponent', () => {
  let component: FsRightsComponent;
  let fixture: ComponentFixture<FsRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
