import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() label!: string;
  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
