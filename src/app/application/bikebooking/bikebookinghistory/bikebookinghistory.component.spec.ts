import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikebookinghistoryComponent } from './bikebookinghistory.component';

describe('BikebookinghistoryComponent', () => {
  let component: BikebookinghistoryComponent;
  let fixture: ComponentFixture<BikebookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikebookinghistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikebookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
