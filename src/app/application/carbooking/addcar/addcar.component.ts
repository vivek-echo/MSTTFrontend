import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  bookingtype:any = "";
  constructor(
    private route : Router,
    private ActivatedRoute : ActivatedRoute
  ) { }
  ngOnInit(): void {
   this.bookingtype = this.ActivatedRoute.snapshot.data['add car'];
    // .data.subscribe((res:any)=>{
    //   this.bookingtype=res.bookingtype
    // })


  }
}
