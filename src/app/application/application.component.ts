import { Component, OnInit } from '@angular/core';
declare let $ : any;
declare var bootstrap: any;
import { TokenService } from 'src/app/Authcomoponent/services/token.service';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authcomoponent/services/auth.service';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent  implements OnInit {
  public userProfile = this.CommonService.getUserProfile();
  public asset_url = environment.asset_url;
  display = true;
  userType: string = "";
  admin: boolean= false;
  merchant: boolean= false;
  customer: boolean= false;
  constructor(
    private TokenService : TokenService,
    private AlertHelper : AlertHelper,
    private route : Router,
    private AuthService: AuthService,
    public CommonService: CommonService

  ) { }
  ngOnInit(): void {

    //jquery for toggle sub menus
    $('.sub-btn').click(() =>{
      $(this).next('.sub-menu').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });

    //jquery for expand and collapse the sidebar
    $('.menu-btn').click(function(){
      $('.side-bar').addClass('active');
      $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
    });

    //FOR TOOLTIP
    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    if(this.userProfile.memberType == 1){
      this.userType = "Admin";
      this.admin = true;
    }
    if(this.userProfile.memberType == 2){
      this.userType = "Merchant";
      this.merchant = true;
    }
    if(this.userProfile.memberType == 3){
      this.userType = "Customer";
      this.customer = true;
    }

  }

  menutog() {
    this.display = !this.display;
  }

  logout(e:MouseEvent){
    e.preventDefault();
    this.AuthService.changeAuthStatus(false);
    this.TokenService.remove();
    this.route.navigateByUrl('/login');

  }
  //SIDEMENU TOGGLE ENDS
}
