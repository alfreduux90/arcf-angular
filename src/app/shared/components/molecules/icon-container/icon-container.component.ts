
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'dp-icon-container',
  templateUrl: './icon-container.component.html',
  styleUrls: ['./icon-container.component.scss']
})
export class IconContainerComponent implements OnInit {
  @Input() item!: string;

  constructor(){}

  ngOnInit() {}
}