import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusbookingComponent } from './busbooking.component';

describe('BusbookingComponent', () => {
  let component: BusbookingComponent;
  let fixture: ComponentFixture<BusbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
