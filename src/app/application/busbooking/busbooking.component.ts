import { Component, OnInit,AfterViewInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})
export class BusbookingComponent implements OnInit ,AfterViewInit{
  ngOnInit(): void {
    $('#example').DataTable();

  }

  ngAfterViewInit(): void {
    $('#example').DataTable();
    //datatable

  }

  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  
}
