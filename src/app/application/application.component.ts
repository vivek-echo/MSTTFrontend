import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  //SIDEMENU TOOGLE STARTS
  display = true;

  menutog() {
    this.display = !this.display;
  }
  //SIDEMENU TOGGLE ENDS
}
