import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css',
})
export class StartScreenComponent {
  @Output() startGame = new EventEmitter<void>();
}
