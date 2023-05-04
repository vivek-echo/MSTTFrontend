import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtrucksUsersComponent } from './viewtrucks-users.component';

describe('ViewtrucksUsersComponent', () => {
  let component: ViewtrucksUsersComponent;
  let fixture: ComponentFixture<ViewtrucksUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtrucksUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtrucksUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
