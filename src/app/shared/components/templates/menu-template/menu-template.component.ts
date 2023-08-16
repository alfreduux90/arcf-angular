import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.scss'],
})
export class MenuTemplateComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();

  constructor() { 
  }

  ngOnInit() {
  }

  closeMenu(): void {
    this.menuToggle.emit();
}

}