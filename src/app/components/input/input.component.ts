import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  nonFiniteStream = '';
  output = [];

  constructor() { }

  ngOnInit() {
  }

  getA_B(event) {
    this.output.push(event);
    console.log(this.output);
  }

  reset() {
    this.nonFiniteStream = '';
    this.output = [];
  }

}

