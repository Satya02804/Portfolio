import { Component, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  // Injecting the Portfolio service to access global state
  portfolio = inject(Portfolio);
}
