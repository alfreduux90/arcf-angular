import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.scss']
})
export class HeaderTemplateComponent implements OnInit {
  items = [
  { link: '/static/not-found', icon: 'how_to_reg', auth: 'false' },
  { link: '/static/not-welcome', icon: 'login', auth: 'false' },
  { link: '/static/welcome', icon: 'logout', auth: 'true' },
];
  @Output() menuToggle = new EventEmitter<void>();

    constructor(){
      console.log(this.items);
    }

  ngOnInit(): void {}

  onItemClick() {
  }
  onMenuToggleDispatch(): void {
    this.menuToggle.emit();
  }
}

