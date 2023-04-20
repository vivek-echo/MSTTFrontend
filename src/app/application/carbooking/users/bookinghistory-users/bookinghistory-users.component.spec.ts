import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinghistoryUsersComponent } from './bookinghistory-users.component';

describe('BookinghistoryUsersComponent', () => {
  let component: BookinghistoryUsersComponent;
  let fixture: ComponentFixture<BookinghistoryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinghistoryUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookinghistoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
