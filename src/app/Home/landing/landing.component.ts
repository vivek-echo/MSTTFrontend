import { Component, OnInit } from '@angular/core';
declare let $: any;
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public asset_url = environment.asset_url;
  ngOnInit(): void {
    

    // $(".banner-slider").owlCarousel({
    //   loop: true,
    //   margin: 0,
    //   items: 1,
    //   dots: false,
    //   dotsContainer: "#owl-custom-dots",
    //   nav: true,
    //   navText: [
    //     "<i class='bx bxs-chevron-left'></i>",
    //     "<i class='bx bxs-chevron-right'></i>",
    //   ],
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 450,
    // });
    // var bannerSlider = $(".banner-slider");
    // $(".owl-dot").click(function () {
    //   bannerSlider.trigger("to.owl.carousel", [$('.owl-dot').index(), 300]);
    // });
    // $(".banner-slider-two").owlCarousel({
    //   loop: true,
    //   margin: 0,
    //   items: 1,
    //   dots: false,
    //   nav: true,
    //   navText: [
    //     "<i class='bx bxs-chevron-left'></i>",
    //     "<i class='bx bxs-chevron-right'></i>",
    //   ],
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 1000,
    // });
    // $(".banner-slider-three").owlCarousel({
    //   loop: true,
    //   margin: 0,
    //   items: 1,
    //   dots: false,
    //   nav: true,
    //   navText: [
    //     "<i class='bx bxs-chevron-left'></i>",
    //     "<i class='bx bxs-chevron-right'></i>",
    //   ],
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 1000,
    // });
    // $(".testimonial-slider").owlCarousel({
    //   loop: true,
    //   nav: true,
    //   navText: [
    //     "<i class='bx bx-left-arrow-alt'></i>",
    //     "<i class='bx bx-right-arrow-alt'></i>",
    //   ],
    //   dots: false,
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 450,
    //   items: 1,
    // });
    // $(".tours-slider").owlCarousel({
    //   loop: true,
    //   margin: 20,
    //   nav: true,
    //   navText: [
    //     "<i class='bx bxs-chevron-left'></i>",
    //     "<i class='bx bxs-chevron-right'></i>",
    //   ],
    //   dots: false,
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   autoplayTimeout: 8500,
    //   smartSpeed: 450,
    //   responsiveClass: true,
    //   responsive: {
    //     0: { items: 1, margin: 10 },
    //     768: { items: 2 },
    //     991: { items: 3 },
    //   },
    // });

    $('select').niceSelect();
    $('#datepicker').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
    });

    $('.search-btn').on("click", function () {
      $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function () {
      $('.mobile-search').removeClass('slide');
    });
    $('.mobile-menu-btn').on("click", function () {
      $('.main-nav').addClass('show-menu');
    });
    $('.menu-close-btn').on("click", function () {
      $('.main-nav').removeClass('show-menu');
    });
    
    
  }
}
