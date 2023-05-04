import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckbookingComponent } from './truckbooking.component';

describe('TruckbookingComponent', () => {
  let component: TruckbookingComponent;
  let fixture: ComponentFixture<TruckbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
