import { Component } from '@angular/core';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-viewcars-users',
  templateUrl: './viewcars-users.component.html',
  styleUrls: ['./viewcars-users.component.css']
})
export class ViewcarsUsersComponent {

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
