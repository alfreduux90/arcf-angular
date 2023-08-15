import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.scss']
})
export class HeaderTemplateComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onMenuToggleDispatch(): void {
    this.menuToggle.emit();
  }
}