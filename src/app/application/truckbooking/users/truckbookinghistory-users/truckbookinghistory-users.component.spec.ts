import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckbookinghistoryUsersComponent } from './truckbookinghistory-users.component';

describe('TruckbookinghistoryUsersComponent', () => {
  let component: TruckbookinghistoryUsersComponent;
  let fixture: ComponentFixture<TruckbookinghistoryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckbookinghistoryUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckbookinghistoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
