import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcarsComponent } from './viewcars.component';

describe('ViewcarsComponent', () => {
  let component: ViewcarsComponent;
  let fixture: ComponentFixture<ViewcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
