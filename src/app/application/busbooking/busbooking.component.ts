import { Component, OnInit,AfterViewInit } from '@angular/core';
declare let $:any;
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})
export class BusbookingComponent implements OnInit ,AfterViewInit{
  bookingtype:any = "";
  constructor(
    private route : Router,
    private ActivatedRoute : ActivatedRoute
  ) { }
  ngOnInit(): void {
   this.bookingtype = this.ActivatedRoute.snapshot.data['bookingtype'];
    // .data.subscribe((res:any)=>{
    //   this.bookingtype=res.bookingtype
    // })
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
