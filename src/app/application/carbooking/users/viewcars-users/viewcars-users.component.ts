import { Component } from '@angular/core';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonService } from 'src/app/services/common.service';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-viewcars-users',
  templateUrl: './viewcars-users.component.html',
  styleUrls: ['./viewcars-users.component.css']
})
export class ViewcarsUsersComponent {

  stateData: any = [];
  cityData: any = [];
  stateId: any = "";
  cityId: any = "";

  stateLoading: boolean = false;
  cityLoading: boolean = false;
  locationSelected: any;

  public api_url = environment.api_url;

  constructor(private AlertHelper: AlertHelper,
    private HttpClient: HttpClient,
    public CommonService: CommonService){}

  ngOnInit(): void {

    this.getState();

    //FOR TOOLTIP
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //FOR DATATABLE
    $('#admin-table').DataTable();

    //FOR LIGHTBOX
    setTimeout(() => {
      $('#view-image').lightGallery();
    }, 2000);

  }
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
      console.log(this.cityData );
      this.cityLoading = false;
    });


  }

  locationValidation(){
    if(this.stateId==null){
      this.AlertHelper.viewAlert('info', 'Required', 'select a valid state!');
      return;
    }

    if(this.cityId==null){
      this.AlertHelper.viewAlert('info', 'Required', 'select a valid city!');
      return;
    }

    this.getCarDetails();

  }

  getCarDetails(){

    this.locationSelected={
      state: this.stateId,
      city: this.cityId
    }

    this.HttpClient.post(this.api_url + '/findcar', this.locationSelected).subscribe((res: any) => {
      if (res.statusResponse == true) {
        this.stateId="";
        this.cityId = "";
        this.AlertHelper.viewAlert('success', 'SUCCESSFULL', res.msg);
      } else {
        this.AlertHelper.viewAlert('error', 'ERROR', res.msg);

      }
  })

}

}
