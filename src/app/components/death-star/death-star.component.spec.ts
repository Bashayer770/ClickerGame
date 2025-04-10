import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathStarComponent } from './death-star.component';

describe('DeathStarComponent', () => {
  let component: DeathStarComponent;
  let fixture: ComponentFixture<DeathStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
