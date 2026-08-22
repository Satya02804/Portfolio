import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
  animations: [
    trigger('reveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Resume implements AfterViewInit, OnDestroy {
  @ViewChild('tiltCard') card!: ElementRef<HTMLDivElement>;
  isVisible = false;
  private observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    // If we're rendering on the server, show it instantly so it's in the initial HTML
    if (!isPlatformBrowser(this.platformId)) {
      this.isVisible = true;
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(entries => {
        // We need to use NgZone if we're not using signals, but standard property binding works 
        // with the next change detection cycle.
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          this.cdr.detectChanges();
          this.observer?.disconnect();
        }
      }, { threshold: 0.2 });
      
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer?.disconnect();
    }
  }

  onMouseMove(event: MouseEvent) {
    if (!this.card) return;
    
    const rect = this.card.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;
    
    // Fast transition for snappy mouse tracking
    this.card.nativeElement.style.transition = 'transform 0.1s ease-out, border-color 0.5s ease';
    this.card.nativeElement.style.transform = `perspective(1000px) scale3d(1.02, 1.02, 1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onMouseLeave() {
    if (!this.card) return;
    
    // Smooth transition back to resting state
    this.card.nativeElement.style.transition = 'transform 0.5s ease-out, border-color 0.5s ease';
    this.card.nativeElement.style.transform = 'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)';
  }
}
