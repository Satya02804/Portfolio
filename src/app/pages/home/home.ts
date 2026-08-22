import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';
import { Resume } from '../../components/resume/resume';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Resume, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Prevent browser from restoring scroll position
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      
      // Force scroll to top
      window.scrollTo(0, 0);

      // If URL has a hash (like #projects), clear it and navigate to root
      if (window.location.hash) {
        this.router.navigate(['/']);
      }
    }
  }
}

