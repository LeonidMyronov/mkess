import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsDocumentationComponent } from './fs-documentation.component';

describe('FsDocumentationComponent', () => {
  let component: FsDocumentationComponent;
  let fixture: ComponentFixture<FsDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
