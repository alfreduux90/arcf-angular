import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconContainerComponent } from './icon-container.component';

describe('IconContainerComponent', () => {
  let component: IconContainerComponent;
  let fixture: ComponentFixture<IconContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconContainerComponent]
    });
    fixture = TestBed.createComponent(IconContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
