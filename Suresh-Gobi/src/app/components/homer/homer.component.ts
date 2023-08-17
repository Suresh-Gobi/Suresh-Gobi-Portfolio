import { Component, HostListener, OnInit } from '@angular/core';
import projectsData from '../../../assets/projects.json';
declare const $: any;

interface Project {
  title: string;
  description: string;
  tags: string[];
  visitLink: string;
  githubLink: string;
  imageLinks: string[];
  organization: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './homer.component.html',
  styleUrls: ['./homer.component.css'],
})
export class HomeComponent implements OnInit {
  projects: Project[] = projectsData;
  activeSection: string | null = null;
  activeProjectTitle: string | null = null;
  activeProjectImages: string[] = [];
  organizationImageUrl: string = projectsData[0].organization; // Assuming projectsData is accessible here

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.highlightActiveSection();
  }

  openImageModal(project: Project): void {
    // Set the active project title
    this.activeProjectTitle = project.title;

    // Set the active project images
    this.activeProjectImages = project.imageLinks;

    // Show the modal
    const imageModal = $('#imageModal');
    imageModal.modal('show');

    // Delay to allow the modal to be shown before initializing the carousel
    setTimeout(() => {
      const imageSlideshow = $('#imageSlideshow');
      imageSlideshow.carousel();

      // Make sure to handle the carousel slide event
      imageSlideshow.on('slide.bs.carousel', (event: any) => {
        const newIndex = $(event.relatedTarget).index();
        $('.carousel-indicators li').removeClass('active');
        $(`.carousel-indicators li:eq(${newIndex})`).addClass('active');
      });
    }, 0);
  }

  closeImageModal(): void {
    const imageModal = $('#imageModal');
    imageModal.modal('hide');
  }

  highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        this.activeSection = section.id;

        // Highlight corresponding navigation item
        const navItem = document.querySelector(`#nav-${section.id}`);
        if (navItem) {
          const navItems = document.querySelectorAll('navbar ul li');
          navItems.forEach((item) => item.classList.remove('active'));
          navItem.classList.add('active');
        }
      }
    });
  }

  constructor() {}

  ngOnInit() {
    this.highlightActiveSection();
  }
}
