import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  whichView = 'RECIPE';
  onNavigate(view: string) {
    this.whichView = view;
  }
}
