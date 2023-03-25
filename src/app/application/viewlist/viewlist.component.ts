import { Component, OnInit, AfterViewInit  } from '@angular/core';
import Swal from 'sweetalert2'
declare let $: any;

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit, AfterViewInit{

  
   Swal = require('sweetalert2');

  ngAfterViewInit(): void {
    $('#example').DataTable();
    //datatable

  }



  //SIDEMENU TOOGLE STARTS
  display = true;

  menutog() {
    this.display = !this.display;
  }
  //SIDEMENU TOGGLE ENDS
  
  buttonFire() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  ngOnInit(): void {

    // CARDS PROGRESS BAR ANIMATION
    $(".select-one").animate({
      width: "50%"
    }, 1500);

    $(".select-two").animate({
      width: "20%"
    }, 1500);

    $(".select-three").animate({
      width: "70%"
    }, 1500);
    // CARDS PROGRESS BAR ANIMATION ENDS

    // $('.Count').each(function () {
    //   $(this).prop('Counter', 0).animate({
    //     Counter: $(this).text()
    //   }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     step: function (now: number) {
    //       $(this).text(Math.ceil(now));
    //     }
    //   });
    // });


  }

}
