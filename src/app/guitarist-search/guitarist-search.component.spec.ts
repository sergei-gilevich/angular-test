import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitaristSearchComponent } from './guitarist-search.component';

describe('GuitaristSearchComponent', () => {
  let component: GuitaristSearchComponent;
  let fixture: ComponentFixture<GuitaristSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitaristSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitaristSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
