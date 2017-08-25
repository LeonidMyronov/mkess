import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsArgumentsComponent } from './fs-arguments.component';

describe('FsArgumentsComponent', () => {
  let component: FsArgumentsComponent;
  let fixture: ComponentFixture<FsArgumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsArgumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
