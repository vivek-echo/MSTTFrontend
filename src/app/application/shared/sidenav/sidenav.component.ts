import { Component, OnInit } from '@angular/core';
declare let $ : any;
import { TokenService } from 'src/app/Authcomoponent/services/token.service';
import { AlertHelper } from 'src/app/core/helper/alert-helper';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Authcomoponent/services/auth.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public userProfile = localStorage.getItem('profile');
  constructor(
    private TokenService : TokenService,
    private AlertHelper : AlertHelper,
    private route : Router,
    private AuthService: AuthService
  ) { }
  ngOnInit(): void {
      console.log(this.userProfile);
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

  }
  logout(e:MouseEvent){
    e.preventDefault();
    this.AuthService.changeAuthStatus(false);
    this.TokenService.remove();
    this.route.navigateByUrl('/login');

  }

}
