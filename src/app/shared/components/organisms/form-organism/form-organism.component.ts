import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dp-form-organism',
  templateUrl: './form-organism.component.html',
  styleUrls: ['./form-organism.component.scss']
})

export class FormOrganismComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      nombreIniciativa: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}