import { Component, OnInit } from '@angular/core';
declare let $: any;
declare var bootstrap: any;

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {

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
