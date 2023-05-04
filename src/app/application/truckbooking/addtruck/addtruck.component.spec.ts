import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtruckComponent } from './addtruck.component';

describe('AddtruckComponent', () => {
  let component: AddtruckComponent;
  let fixture: ComponentFixture<AddtruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtruckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
