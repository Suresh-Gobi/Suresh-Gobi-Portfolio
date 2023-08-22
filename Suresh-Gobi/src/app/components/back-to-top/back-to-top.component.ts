import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  showBackToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.pageYOffset > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
