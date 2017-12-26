import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitaristDetailsComponent } from './guitarist-details.component';

describe('GuitaristDetailsComponent', () => {
  let component: GuitaristDetailsComponent;
  let fixture: ComponentFixture<GuitaristDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitaristDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitaristDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
