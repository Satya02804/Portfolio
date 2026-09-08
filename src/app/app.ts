import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  readonly title = signal('Satya Patel');
  readonly isMobileMenuOpen = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(open => !open);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
