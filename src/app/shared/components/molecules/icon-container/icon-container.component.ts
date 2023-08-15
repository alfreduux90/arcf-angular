import { Component, OnInit } from '@angular/core';
import { ItemSelectionService } from '../../../../core/services/item-selection.service'

@Component({
  selector: 'dp-icon-container',
  templateUrl: './icon-container.component.html',
  styleUrls: ['./icon-container.component.scss']
})
export class IconContainerComponent implements OnInit {
  selectedItem!: number;

  constructor(private itemSelectionService: ItemSelectionService) {}

  ngOnInit() {
    this.itemSelectionService.selectedItem$.subscribe(itemId => {
      this.selectedItem = itemId;
    });
  }
}