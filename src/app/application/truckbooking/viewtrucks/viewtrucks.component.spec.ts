import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrucksComponent } from './viewtrucks.component';

describe('ViewtrucksComponent', () => {
  let component: ViewtrucksComponent;
  let fixture: ComponentFixture<ViewtrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtrucksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
