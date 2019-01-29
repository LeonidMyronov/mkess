import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsServicesListComponent } from './fs-services-list.component';

describe('FsServicesListComponent', () => {
  let component: FsServicesListComponent;
  let fixture: ComponentFixture<FsServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
