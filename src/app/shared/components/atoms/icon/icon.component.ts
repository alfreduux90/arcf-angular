import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-atom',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent {
  @Input() item!: string;

}