import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckbookinghistoryComponent } from './truckbookinghistory.component';

describe('TruckbookinghistoryComponent', () => {
  let component: TruckbookinghistoryComponent;
  let fixture: ComponentFixture<TruckbookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckbookinghistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckbookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
