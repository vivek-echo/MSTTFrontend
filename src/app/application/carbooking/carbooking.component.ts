import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carbooking',
  templateUrl: './carbooking.component.html',
  styleUrls: ['./carbooking.component.css']
})
export class CarbookingComponent {
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
    
  }
}
