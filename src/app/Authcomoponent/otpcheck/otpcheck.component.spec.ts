import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpcheckComponent } from './otpcheck.component';

describe('OtpcheckComponent', () => {
  let component: OtpcheckComponent;
  let fixture: ComponentFixture<OtpcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpcheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
