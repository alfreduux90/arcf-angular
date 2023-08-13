import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarContainerComponent } from './avatar-container.component';

describe('AvatarContainerComponent', () => {
  let component: AvatarContainerComponent;
  let fixture: ComponentFixture<AvatarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarContainerComponent]
    });
    fixture = TestBed.createComponent(AvatarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
