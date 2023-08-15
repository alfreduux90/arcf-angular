import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dp-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() item!: any;

  constructor() { }

  ngOnInit(): void {
  }

}