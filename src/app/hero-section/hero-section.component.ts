import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component representing the hero section of the application.
 * Provides navigation to specific sections within the page.
 */
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  
  /**
   * Constructs the HeroSectionComponent.
   * @param {Router} router - The Angular Router for navigation.
   */
  constructor(private router: Router) {  
   }
  
  /**
   * Navigates to the "Why Me" section of the page.
   * Scrolls smoothly to the section, accounting for a header offset.
   */
  navigateToWhyMe(): void {
    this.router.navigate([], { fragment: 'why-me-section' }).then(() => {
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
  
  /**
   * Navigates to the "Contact Me" section of the page.
   * Scrolls smoothly to the section, accounting for a header offset.
   */
  navigateToContactMe(): void {
    this.router.navigate([], { fragment: 'contact-me-container' }).then(() => {
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