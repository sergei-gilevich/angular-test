import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitaristsComponent } from './guitarists.component';

describe('GuitaristsComponent', () => {
  let component: GuitaristsComponent;
  let fixture: ComponentFixture<GuitaristsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitaristsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitaristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
