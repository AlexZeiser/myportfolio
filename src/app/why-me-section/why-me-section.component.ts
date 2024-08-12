import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  templateUrl: './why-me-section.component.html',
  styleUrls: ['./why-me-section.component.scss']
})
export class WhyMeSectionComponent {
  constructor(private router: Router) { }

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
