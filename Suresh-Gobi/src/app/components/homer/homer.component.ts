import { Component, HostListener, OnInit } from '@angular/core';
import projectsData from '../../../assets/projects.json';
declare const $: any; 

interface Projects {  
  title: String;  
  description: String; 
  tags: string[];
  visitLink: string;
  githubLink: string;
  
}  

@Component({
  selector: 'app-home',
  templateUrl: './homer.component.html',
  styleUrls: ['./homer.component.css']
})
export class HomeComponent implements OnInit{

  projects: Projects[] = projectsData;  

  activeSection: string | null = null;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.highlightActiveSection();
  }

  openImageModal(): void {
    // Clear any existing images
    $('#imageSlideshow .carousel-inner').empty();

    // Extract image URLs from the project
    const imageUrls = [
      'image_url_1.jpg',
      'image_url_2.jpg',
      'image_url_3.jpg',
      // Add more image URLs here
    ];

    // Populate the modal with images
    imageUrls.forEach((imageUrl, index) => {
      const isActive = index === 0 ? 'active' : '';
      const imageSlide = `
        <div class="carousel-item ${isActive}">
          <img src="${imageUrl}" class="d-block w-100" alt="Image ${index + 1}">
        </div>`;
      $('#imageSlideshow .carousel-inner').append(imageSlide);
    });

    // Show the modal
    $('#imageModal').modal('show');
  }

  highlightActiveSection() {
    const sections = document.querySelectorAll('section');
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
