import { Component } from '@angular/core';

declare let $: any;
declare let bootstrap: any;

@Component({
  selector: 'app-addtruck',
  templateUrl: './addtruck.component.html',
  styleUrls: ['./addtruck.component.css']
})
export class AddtruckComponent {

  ngOnInit(): void {

    //FOR TOOLTIP
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

  }

}
