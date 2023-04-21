import { Component, OnInit } from '@angular/core';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css'],
})
export class AddcarComponent implements OnInit {
  loadding: boolean = false;
  imageurl: any = '';
  msg = '';
  imagerendered!: boolean;
  carType: any = '';
  carBrand: any = '';
  carYear: any = '';
  fuelType: any = '';
  mileage: any = '';
  ownerName: any = '';
  address: any = '';
  RCNo: any = '';
  chassisNo: any = '';
  insuranceValidFrom: any = '';
  insuranceValidTill: any = '';
  pollutionValidTill: any = '';
  pollutionValidFrom: any = '';
  stateId: any = "";
  cityId: any = "";
  stateData: any = [];
  cityData: any = [];

  stateLoading: boolean = false;
  cityLoading: boolean = false;

  carDetails: any=[];

  addCarValidation: boolean = false;
  addCarData: any;

  fileRc: any = "";
  imagePath: any;
  imageSrcRc:any;

  rcImageUpload: any = "";
  // fileToUploadRc: any = "";
  // imageUrlRc: any = "";
  // isimageUrlRc: boolean = false;

  public api_url = environment.api_url;
  public userProfile = this.CommonService.getUserProfile();

  constructor(

    private AlertHelper: AlertHelper,
    private HttpClient: HttpClient,
    public CommonService: CommonService
  ) {

  }
  ngOnInit(): void {
    this.getState();
    this.imagePath = environment.api_url + "/public/img/products/";
  }

  //get sate api from common service
  getState() {
    this.stateLoading = true;
    this.CommonService.getState().subscribe((res: any) => {
      this.stateData = res.stateData;
      this.stateLoading = false;
    });


  }
  //get city api from common service
  getCity(stateId: any) {

    this.cityLoading = true;
    this.CommonService.getCity(stateId).subscribe((res: any) => {
      this.cityData = res.cityData;
      console.log(this.cityData);
      this.cityLoading = false;
    });


  }

  handleFileInputRc(e: any) {
    console.log(e);
    this.fileRc = e.target.files[0];

    const reader = new FileReader();
    reader.onload = e => {
    this.imageSrcRc = reader.result;
      console.log(reader.result);
    };

    reader.readAsDataURL(this.fileRc);

   console.log(this.fileRc)
  }

  

  // submit add car
  registerCar() {
    // console.log(this.file);return;
    if (this.carType == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'select a valid car type!');
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

    if (this.stateId == '') {
      this.AlertHelper.viewAlert('info', 'Required', 'invalid state name');
      return;
    }

    if (this.cityId == '') {
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

    //if validation is not false the submit
    this.onSubmitCarDetails();
  }

  onSubmitCarDetails() {
    this.loadding = true;
    this.carDetails = {
      userId: this.userProfile.id,
      carType: this.carType,
      carBrand: this.carBrand,
      carYear: this.carYear,
      fuelType: this.fuelType,
      mileage: this.mileage,
      ownerName: this.ownerName,
      stateId: this.stateId,
      cityId: this.cityId,
      address: this.address,
      RCNo: this.RCNo,
      file:this.fileRc,
      chassisNo: this.chassisNo,
      insuranceValidFrom: this.insuranceValidFrom,
      insuranceValidTill: this.insuranceValidTill,
      pollutionValidFrom: this.pollutionValidFrom,
      pollutionValidTill: this.pollutionValidTill,
    };


    this.HttpClient.post(this.api_url + '/addCar', this.carDetails).subscribe((res: any) => {
      if (res.statusResponse == true) {
        this.carType = "";
        this.carBrand = "";
        this.carYear = "";
        this.fuelType = "";
        this.mileage = "";
        this.ownerName = "";
        this.stateId = "";
        this.cityId = "";
        this.address = "";
        this.RCNo = "";
        this.chassisNo = "";
        this.insuranceValidFrom = "";
        this.insuranceValidTill = "";
        this.pollutionValidFrom = "";
        this.pollutionValidTill = "";
        this.AlertHelper.viewAlert('success', 'SUCCESSFULL', res.msg);
      } else {
        this.AlertHelper.viewAlert('error', 'ERROR', res.msg);

      }
      this.loadding = false;
    });

  }

}
