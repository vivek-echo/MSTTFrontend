import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LocationSelectorService } from 'src/app/services/location-selector.service';

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
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();

  countries!: Country[];
  states!: string[];
  cities!: string[];

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
  url: any = "";
	msg = "";

  constructor(private service: LocationSelectorService) {
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
  }
  getCountries(){
    // this.countryInfo= ["India"];
    this.service.getCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue:any) {
    var country : any;
    country = (countryValue.target as HTMLTextAreaElement).value
    // this.cityInfo=this.stateInfo[country].Cities;
    this.stateInfo=this.countryInfo[country].States;
    this.cityInfo=this.stateInfo[0].Cities;
    console.log(this.countryInfo[countryValue].States);
    console.log(country)
  }

  onChangeState(stateValue:any) {
    var state : any;
    state = (stateValue.target as HTMLTextAreaElement).value
    this.cityInfo=this.stateInfo[state].Cities;
    //console.log(this.cityInfo);
  }

  selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}


}
