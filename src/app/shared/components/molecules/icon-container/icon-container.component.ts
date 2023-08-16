import { Component, OnInit, Input} from '@angular/core';
import { ItemSelectionService } from '../../../../core/services/item-selection.service'

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