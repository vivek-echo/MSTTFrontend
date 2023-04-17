import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  bookingtype:any = "";
  suv!:boolean;
  sedan!:boolean;
  hatchback!:boolean;
  carsegment!:string[];
  selectedCarSegmentInternal: any;
  carmodelsuv!: string[];
  selectedCarModelInternal: any;
  // selectedCarSegment!:string;

  constructor(
    private route : Router,
    private ActivatedRoute : ActivatedRoute
  ) { }
  ngOnInit(): void {
   this.bookingtype = this.ActivatedRoute.snapshot.data['bookingtype'];
   this.suv = false;
   this.sedan = false;
   this.hatchback = false;
   this.carsegment = ["SUV","Sedan","Hatchback"]
   this.carmodelsuv =["xuv700","SCorpio","Creta","Seltos"]
    // .data.subscribe((res:any)=>{
    //   this.bookingtype=res.bookingtype
    // })


  }
  url="src/assets/img/xuv700.jpg";
  set selectedCarSegment(value: any){
    if(value){
      this.selectedCarSegmentInternal = value;
      console.log(this.selectedCarSegment)
    }

  }
  get selectedCarSegment():any{
    return this.selectedCarSegmentInternal
  }

  set selectedCarModel(value: any){
    if(value){
      this.selectedCarModelInternal = value;
      console.log(this.selectedCarModel)
    }

  }
  get selectedCarModel():any{
    return this.selectedCarModelInternal
  }
  toggleDisplay(){
   console.log()
      if(document.getElementById('carsegment')?.innerHTML.includes("SUV")){
        this.suv = true;
        this.sedan = false;
        this.hatchback = false;
        if(document.getElementById('carbrand')?.innerHTML.includes("Hyundai")){

        }
      }
      else if(document.getElementById('carsegment')?.innerHTML.includes("Sedan")){
        this.sedan = true;
        this.hatchback = false;
        this.suv = false;
      }
      else if(document.getElementById('carsegment')?.innerHTML.includes("Hatchback")){
        this.hatchback = true;
        this.suv = false;
        this.sedan = false;
      }

    }
    onselectimage(e:any){
      if(e.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files)
        reader.onload=(event:any)=>{
          this.url=event.target.result;
          console.log(this.url)
        }
      }
    }


  submitDisplay(){

  }
}
