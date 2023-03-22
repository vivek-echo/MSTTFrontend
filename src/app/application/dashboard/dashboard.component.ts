import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {


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
