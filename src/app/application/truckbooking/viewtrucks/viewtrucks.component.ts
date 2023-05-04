import { Component } from '@angular/core';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-viewtrucks',
  templateUrl: './viewtrucks.component.html',
  styleUrls: ['./viewtrucks.component.css']
})
export class ViewtrucksComponent {

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
