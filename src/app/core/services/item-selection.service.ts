import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemSelectionService {
  private selectedItemSource = new Subject<number>();
  selectedItem$ = this.selectedItemSource.asObservable();

  selectItem(itemId: number) {
    this.selectedItemSource.next(itemId);
  }
}
