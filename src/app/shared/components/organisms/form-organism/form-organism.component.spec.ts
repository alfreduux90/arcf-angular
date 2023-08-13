import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrganismComponent } from './form-organism.component';

describe('IniciativaFormComponent', () => {
  let component: FormOrganismComponent;
  let fixture: ComponentFixture<FormOrganismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOrganismComponent]
    });
    fixture = TestBed.createComponent(FormOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
