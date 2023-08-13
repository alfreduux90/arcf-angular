import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showSpinner = false;
  ngOnInit(): void {}
  title = 'Iniciativas Digitales';

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }
}
