import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  constructor(private router: Router) { }

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToWhyMe(): void {
    this.router.navigate(['/why-me-section'], { fragment: 'why-me-section' }).then(() => {
      const element = document.getElementById('why-me-section');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  navigateToSkills(): void {
    this.router.navigate(['/my-skills-section'], { fragment: 'my-skills-section' }).then(() => {
      const element = document.getElementById('my-skills-section');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  navigateToProjects(): void {
    this.router.navigate(['/my-projects-section'], { fragment: 'my-projects-section' }).then(() => {
      const element = document.getElementById('my-projects-section');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  navigateToContactMe(): void {
    this.router.navigate(['/contact-me-section'], { fragment: 'contact-me-container' }).then(() => {
      const element = document.getElementById('contact-me-container');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

}
