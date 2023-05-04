import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikebookinghistoryUsersComponent } from './bikebookinghistory-users.component';

describe('BikebookinghistoryUsersComponent', () => {
  let component: BikebookinghistoryUsersComponent;
  let fixture: ComponentFixture<BikebookinghistoryUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikebookinghistoryUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikebookinghistoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
