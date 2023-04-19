import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LocationSelectorService } from 'src/app/services/location-selector.service';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { LoginComponent } from 'src/app/Authcomoponent/login/login.component';
import { ApplicationComponent } from '../../application.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

interface Country {
  shortName: string;
  name: string;
}

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css'],
})
export class AddcarComponent implements OnInit {
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();

  countries!: Country[];
  states: any = '';
  cities!: string[];
  stateLoading: boolean = false;

  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);

  tooltipList: any;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  url: any = '';
  msg = '';
  imagerendered!: boolean;
  carType: any = '';
  carBrand: any = '';
  carYear: any = '';
  fuelType: any = '';
  mileage: any = '';
  ownerName: any = '';
  stateName: any = '';
  cityName: any = '';
  address: any = '';
  RCNo: any = '';
  chassisNo: any = '';
  insuranceValidFrom: any = '';
  insuranceValidTill: any = '';
  pollutionValidTill: any = '';
  pollutionValidFrom: any = '';

  carDetails: any;
  public api_url = environment.api_url;
  addCarValidation: boolean = false;

  constructor(
    private service: LocationSelectorService,
    private AlertHelper: AlertHelper,
    private userId : ApplicationComponent,
    private HttpClient: HttpClient
  ) {
    // this.form = new FormGroup({
    //   country: this.country,
    //   state: this.state,
    //   city: this.city,
    // });
  }
  ngOnInit(): void {
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })
    this.getCountries();
    // this.imagerendered = false;
  }
  getCountries() {
    this.stateLoading = true;
    // this.countryInfo= ["India"];
    this.service.getCountries().subscribe(
      (data2) => {
        this.countryInfo = data2.Countries;
        console.log('Data:', this.countryInfo);
        this.stateLoading = false;
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

  onChangeCountry(countryValue: any) {
    var country: any;
    country = (countryValue.target as HTMLTextAreaElement).value;
    // this.cityInfo=this.stateInfo[country].Cities;
    this.stateInfo = this.countryInfo[country].States;
    console.log(this.countryInfo[country]);
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.countryInfo[country].States);
    console.log(country);
  }

  onChangeState(stateValue: any) {
    var state: any;
    state = (stateValue.target as HTMLTextAreaElement).value;
    this.cityInfo = this.stateInfo[state].Cities;
    //console.log(this.cityInfo);
  }

  selectFile(event: any) {
    //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
      this.imagerendered = true;
    };
  }

  registerCar(e: any) {
    if (this.carType == '') {
      // console.log(this.userId.userId)
      this.AlertHelper.viewAlert(
        'info',
        'Required',
        'select a valid car type!'
      );
      return;
    }

    if (this.carBrand == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid car brand');
      return;
    }

    if (this.carYear == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid car year');
      return;
    }

    if (this.fuelType == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid fuel type');
      return;
    }

    if (this.mileage == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid mileage');
      return;
    }

    if (this.ownerName == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid owner name');
      return;
    }

    if (this.stateName == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid state name');
      return;
    }

    if (this.cityName == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid city name');
      return;
    }

    if (this.address == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid address');
      return;
    }

    if (this.RCNo == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid RC Number');
      return;
    }

    if (this.RCNo == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid RC Number');
      return;
    }

    if (this.chassisNo == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid Chassis Number');
      return;
    }

    if (this.insuranceValidFrom == '') {
      this.AlertHelper.viewAlert(
        'info',
        'Required',
        'invalid insurance validity start date!'
      );
      return;
    }

    if (this.insuranceValidTill == '') {
      this.AlertHelper.viewAlert(
        'info',
        'Required',
        'invalid insurance validity end date!'
      );
      return;
    }

    if (this.pollutionValidTill == '') {
      this.AlertHelper.viewAlert(
        'info',
        'Required',
        'invalid insurance validity end date!'
      );
      return;
    }

    if (this.pollutionValidFrom == '') {
      this.AlertHelper.viewAlert(
        'info',
        'Required',
        'invalid pollution validity start date!'
      );
      return;
    }
    this.addCarValidation = true;
    this.AlertHelper.viewAlert('success', 'VALID', e);
  }

  onSubmitCarDetails() {
    console.log("inside submit")
    this.carDetails = {
      userId: 1,
      carType: this.carType,
      carBrand: this.carBrand,
      carYear: this.carYear,
      fuelType: this.fuelType,
      mileage: this.mileage,
      ownerName: this.ownerName,
      stateName: this.stateName,
      cityName: this.cityName,
      address: this.address,
      RCNo: this.RCNo,
      chassisNo: this.chassisNo,
      insuranceValidFrom: this.insuranceValidFrom,
      insuranceValidTill: this.insuranceValidTill,
      pollutionValidTill: this.pollutionValidTill,
      pollutionValidFrom: this.pollutionValidFrom,
    };

    console.log(this.carDetails);

    if(this.addCarValidation){
      this.HttpClient.post(this.api_url + "/addCar", this.carDetails).subscribe(data => this.addedCar(data), error => this.errorHandle(error));
    }


  }

  addedCar(e:any){
    console.log(e);
  }

  errorHandle(err:any){
    console.log(err);
  }
}
