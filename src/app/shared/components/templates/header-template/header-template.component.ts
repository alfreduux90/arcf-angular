import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ItemSelectionService} from '../../../../core/services/item-selection.service'

@Component({
  selector: 'app-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.scss']
})
export class HeaderTemplateComponent implements OnInit {
  items = [
    { id: 1, name: 'menu'},
  ];

  @Output() menuToggle = new EventEmitter<void>();

  constructor(private itemSelectionService: ItemSelectionService) {}

  ngOnInit(): void {}

  onItemClick(itemId: number) {
    this.itemSelectionService.selectItem(itemId);
  }
  onMenuToggleDispatch(): void {
    this.menuToggle.emit();
  }
}

