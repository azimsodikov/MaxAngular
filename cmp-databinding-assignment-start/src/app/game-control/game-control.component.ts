import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  iNumber = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }
  onStartGame(){
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.iNumber + 1);
      this.iNumber++;
    }, 1000);
  }
  onStopGame(){
    clearInterval(this.interval);
  }

}
