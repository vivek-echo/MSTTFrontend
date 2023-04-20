import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcarsUsersComponent } from './viewcars-users.component';

describe('ViewcarsUsersComponent', () => {
  let component: ViewcarsUsersComponent;
  let fixture: ComponentFixture<ViewcarsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcarsUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcarsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
