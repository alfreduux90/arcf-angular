import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.scss'],
})
export class MenuTemplateComponent implements OnInit {
  items = [
    { link: '/static/not-found', icon: 'home', description: 'Inicio' },
    { link: '/static/not-welcome', icon: 'voicemail', description: 'Check voice mail' },
    { link: '/login', icon: 'notifications_off', description: 'Disable alertssss' }
  ];

  @Output() menuToggle = new EventEmitter<void>();

  constructor() { 
  }

  ngOnInit() {
  }

  closeMenu(): void {
    this.menuToggle.emit();
}

}