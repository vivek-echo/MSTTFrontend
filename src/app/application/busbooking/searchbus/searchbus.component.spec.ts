import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbusComponent } from './searchbus.component';

describe('SearchbusComponent', () => {
  let component: SearchbusComponent;
  let fixture: ComponentFixture<SearchbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
