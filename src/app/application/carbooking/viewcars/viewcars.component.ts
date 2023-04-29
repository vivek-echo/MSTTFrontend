import { Component } from '@angular/core';
import { AddcarComponent } from '../addcar/addcar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-viewcars',
  templateUrl: './viewcars.component.html',
  styleUrls: ['./viewcars.component.css'],
})
export class ViewcarsComponent {
  userId: any;
  public api_url = environment.api_url;
  public asset_url = environment.asset_url;
  public asset_url1 = environment.asset_url1;
  carDetails: any =[];

  constructor(private HttpClient: HttpClient) {}
  ngOnInit(): void {

    this.viewCar();
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

  viewCar() {
    this.userId = {
      userId: '1',
    };
    // this.spinner.show();
    this.HttpClient.post(this.api_url + '/viewCar', this.userId).subscribe((res:any)=>{
     this.carDetails = res.responseData;
    }

    );
  }
  // viewCarData(data: any) {

  //   console.log('inside view car', data);
  //   this.carDetails = data;
  //   console.log('inside view car', this.carDetails);
  // }

  getData(item: any) {
    console.log('inside test', item);
  }
}
