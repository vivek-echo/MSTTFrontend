import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-bookinghistory-users',
  templateUrl: './bookinghistory-users.component.html',
  styleUrls: ['./bookinghistory-users.component.css']
})
export class BookinghistoryUsersComponent {
  public asset_url = environment.asset_url;
  ngOnInit(): void {


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

}
