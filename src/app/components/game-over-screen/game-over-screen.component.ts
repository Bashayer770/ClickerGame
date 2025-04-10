import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over-screen',
  imports: [CommonModule],
  templateUrl: './game-over-screen.component.html',
  styleUrl: './game-over-screen.component.css',
})
export class GameOverScreenComponent {
  @Input() score: number = 0;
  @Output() playAgain = new EventEmitter<void>();
}
