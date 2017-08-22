import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SericesListComponent } from './services-list.component';

describe('SericesListComponent', () => {
  let component: SericesListComponent;
  let fixture: ComponentFixture<SericesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SericesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SericesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
