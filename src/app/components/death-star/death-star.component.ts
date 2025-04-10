import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-death-star',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './death-star.component.html',
})
export class DeathStarComponent implements OnChanges {
  @Input() gameOver: boolean = false;
  @Output() hit = new EventEmitter<void>();

  imageSrc = 'https://cdn-icons-png.flaticon.com/512/5512/5512609.png';
  targetX = '40%';
  targetY = '40%';
  isShaking = false;

  ngOnInit() {
    this.randomizeTarget();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['gameOver'] && this.gameOver) {
      this.imageSrc = 'https://static.thenounproject.com/png/3224385-200.png'; // 💥 boom
    }
  }

  onTargetClick() {
    if (this.gameOver) return;

    this.hit.emit();
    this.randomizeTarget();

    this.isShaking = true;
    this.imageSrc = 'https://cdn-icons-png.freepik.com/512/5507/5507797.png';

    setTimeout(() => {
      this.imageSrc = 'https://cdn-icons-png.flaticon.com/512/5512/5512609.png';
      this.isShaking = false;
    }, 300);
  }

  randomizeTarget() {
    const x = Math.floor(Math.random() * 80);
    const y = Math.floor(Math.random() * 80);
    this.targetX = `${x}%`;
    this.targetY = `${y}%`;
  }
}
