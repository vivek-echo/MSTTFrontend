import { Component } from '@angular/core';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-truckbookinghistory',
  templateUrl: './truckbookinghistory.component.html',
  styleUrls: ['./truckbookinghistory.component.css']
})
export class TruckbookinghistoryComponent {

  ngOnInit(): void {

    //FOR TOOLTIP
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //FOR DATATABLE
    $('#admin-table').DataTable();

  }

}
