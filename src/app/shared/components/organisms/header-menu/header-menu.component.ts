import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemSelectionService} from '../../../../core/services/item-selection.service'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent  {

  items = [
    { id: 1, name: 'login'},
    { id: 2, name: 'logout' },
    { id: 3, name: 'about' }
  ];

  constructor(private itemSelectionService: ItemSelectionService) {}

  onItemClick(itemId: number) {
    this.itemSelectionService.selectItem(itemId);
  }
}