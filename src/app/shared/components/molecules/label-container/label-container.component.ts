import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dp-label-container',
  templateUrl: './label-container.component.html',
  styleUrls: ['./label-container.component.scss']
})
export class LabelContainerComponent implements OnInit {
  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}