import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gabarit-icon',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class IconComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}