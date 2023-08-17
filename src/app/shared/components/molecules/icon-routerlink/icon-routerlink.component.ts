import { Component, OnInit } from '@angular/core';
import { ItemSelectionService } from '../../../../core/services/item-selection.service'


@Component({
  selector: 'app-icon-routerlink',
  templateUrl: './icon-routerlink.component.html',
  styleUrls: ['./icon-routerlink.component.scss']
})
export class IconRouterlinkComponent implements OnInit {

  selectedItem!: number;

  constructor(private itemSelectionService: ItemSelectionService) {}

  ngOnInit() {
    this.itemSelectionService.selectedItem$.subscribe(itemId => {
      this.selectedItem = itemId;
    });
  }
}