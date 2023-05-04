import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbikesComponent } from './viewbikes.component';

describe('ViewbikesComponent', () => {
  let component: ViewbikesComponent;
  let fixture: ComponentFixture<ViewbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
