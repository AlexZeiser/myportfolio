import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  constructor(private router: Router) { }

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
