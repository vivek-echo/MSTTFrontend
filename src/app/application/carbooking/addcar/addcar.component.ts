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
  url: any = "";
	msg = "";
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


	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}


  submitDisplay(){

  }
}
