import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathStarComponent } from '../death-star/death-star.component';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [CommonModule, DeathStarComponent],
  templateUrl: './game-screen.component.html',
})
export class GameScreenComponent implements OnInit {
  score = 0;
  timeLeft = 10;
  intervalId: any;

  @Output() gameOver = new EventEmitter<number>();

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.gameOver.emit(this.score);
      }
    }, 1000);
  }

  increaseScore() {
    this.score++;
  }
}
