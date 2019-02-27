import { Component, OnChanges, SimpleChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnChanges {

  @Input() nonFiniteStream = '';
  @Output() A_B_Emitter = new EventEmitter();

  addBuffer = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    if (change.nonFiniteStream.previousValue !== undefined && change.nonFiniteStream.currentValue !== '' ) {
      this.addToBuffer(
        change.nonFiniteStream.currentValue[change.nonFiniteStream.currentValue.length - 1]
      );
    }
  }

 addToBuffer(enteredValue) {
  if (enteredValue === 'x' || enteredValue === 'y' && this.addBuffer.length < 3) {
    this.addBuffer.push(enteredValue);
    this.bufferLogic();
  }
 }

 bufferLogic() {

    // xxx (A)
   if (this.addBuffer[0] === 'x' && this.addBuffer[1] === 'x' && this.addBuffer[2] === 'x') {
     this.addBuffer.pop();
     this.addBuffer.pop();
     this.addBuffer.pop();
     this.A_B_Emitter.emit('A');
     console.log('A');
   }
    // yyy
    if (this.addBuffer[0] === 'y' && this.addBuffer[1] === 'y' && this.addBuffer[2] === 'y') {
      this.addBuffer.pop();
      this.addBuffer.pop();
      this.addBuffer.pop();
    }
    // xxy
    if (this.addBuffer[0] === 'x' && this.addBuffer[1] === 'x' && this.addBuffer[2] === 'y') {
      this.addBuffer.splice(0, 1);
    }
    // yyx
    if (this.addBuffer[0] === 'y' && this.addBuffer[1] === 'y' && this.addBuffer[2] === 'x') {
      this.addBuffer.splice(0, 1);
      this.addBuffer.splice(0, 1);
    }
    // xyx (B)
    if (this.addBuffer[0] === 'x' && this.addBuffer[1] === 'y' && this.addBuffer[2] === 'x') {
      this.addBuffer.pop();
      this.addBuffer.pop();
      this.addBuffer.pop();
      this.A_B_Emitter.emit('B');
    }
    // yxy
    if (this.addBuffer[0] === 'y' && this.addBuffer[1] === 'x' && this.addBuffer[2] === 'y') {
      this.addBuffer.splice(0, 1);
    }
    // xyy
    if (this.addBuffer[0] === 'x' && this.addBuffer[1] === 'y' && this.addBuffer[2] === 'y') {
      this.addBuffer.pop();
      this.addBuffer.pop();
      this.addBuffer.pop();
    }
    // yxx
    if (this.addBuffer[0] === 'y' && this.addBuffer[1] === 'x' && this.addBuffer[2] === 'x') {
      this.addBuffer.splice(0, 1);
    }
  }
}
