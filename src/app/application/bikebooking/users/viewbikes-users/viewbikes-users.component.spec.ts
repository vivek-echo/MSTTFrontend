import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbikesUsersComponent } from './viewbikes-users.component';

describe('ViewbikesUsersComponent', () => {
  let component: ViewbikesUsersComponent;
  let fixture: ComponentFixture<ViewbikesUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbikesUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbikesUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
