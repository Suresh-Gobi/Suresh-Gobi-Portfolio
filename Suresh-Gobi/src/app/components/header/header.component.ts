import { Component, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSection: string | null = null;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.highlightActiveSection();
  }

  highlightActiveSection() {
    const sections = document.querySelectorAll('section'); // Change this selector to match your sections
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = section.id;
      }
    });
  }

  constructor() { }

  ngOnInit() {
    this.highlightActiveSection();
  }
}
