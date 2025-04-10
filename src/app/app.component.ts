import { Component } from '@angular/core';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameOverScreenComponent } from './components/game-over-screen/game-over-screen.component';

@Component({
  selector: 'app-root',
  imports: [
    StartScreenComponent,
    GameScreenComponent,
    CommonModule,
    FormsModule,
    GameOverScreenComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  state: 'start' | 'playing' | 'gameover' = 'start';
  finalScore = 0;

  onStart() {
    this.state = 'playing';
  }

  onGameOver(score: number) {
    this.finalScore = score;
    this.state = 'gameover';
  }

  onRestart() {
    this.state = 'start';
  }
}
