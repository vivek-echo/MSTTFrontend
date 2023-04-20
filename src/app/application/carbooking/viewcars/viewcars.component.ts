import { Component } from '@angular/core';
import { AddcarComponent } from '../addcar/addcar.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewcars',
  templateUrl: './viewcars.component.html',
  styleUrls: ['./viewcars.component.css'],
})
export class ViewcarsComponent {
  userId: any;
  public api_url = environment.api_url;
  carDetails: any;

  constructor(private HttpClient: HttpClient) {}

  viewCarData(data: any) {
    console.log('inside view car', data);
    this.carDetails = data;
    console.log('inside view car', this.carDetails);
  }

  test(item: any) {
    console.log('inside test', item);
  }
}
