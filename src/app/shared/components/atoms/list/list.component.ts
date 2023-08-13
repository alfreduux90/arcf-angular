import { Component, Input } from '@angular/core';

@Component({
  selector: 'dp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() item!: string;

}
