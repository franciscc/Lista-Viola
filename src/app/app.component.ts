import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hide = false; // initial value
  
  onHideNavbar(hide: boolean) {
    this.hide = hide;
  }
}
