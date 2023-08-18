import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    { link: '/static/not-found', icon: 'home', description: 'Inicio' },
    { link: '/static/not-welcome', icon: 'voicemail', description: 'Check voice mail' },
    { link: '/static/welcome', icon: 'notifications_off', description: 'Disable alertssss' }
  ];

  @Output() menuToggle = new EventEmitter<void>();

  constructor(){
    console.log(this.items);
  }

  ngOnInit() {
  }

  closeMenu(): void {
    this.menuToggle.emit();
}

}