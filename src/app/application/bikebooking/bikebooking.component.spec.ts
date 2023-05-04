import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikebookingComponent } from './bikebooking.component';

describe('BikebookingComponent', () => {
  let component: BikebookingComponent;
  let fixture: ComponentFixture<BikebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
