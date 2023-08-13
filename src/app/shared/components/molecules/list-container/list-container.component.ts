import { Component } from '@angular/core';

@Component({
  selector: 'dp-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})

export class ListContainerComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}