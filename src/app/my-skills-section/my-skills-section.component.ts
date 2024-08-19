import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * The `MySkillsSectionComponent` represents the section of the application dedicated to displaying
 * information about the user's skills.
 */
@Component({
  selector: 'app-my-skills-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})
export class MySkillsSectionComponent {

  /**
   * Constructs an instance of the `MySkillsSectionComponent`.
   * 
   * @param router The Angular Router service for navigation.
   */
  constructor(private router: Router) { }

  /**
   * Navigates to the "Contact Me" section on the page and scrolls smoothly to it.
   * The navigation uses the fragment identifier 'contact-me-container' to locate the section.
   * 
   * @returns {void}
   */
  navigateToContactMe(): void {
    this.router.navigate([], { fragment: 'contact-me-container' }).then(() => {
      const element = document.getElementById('contact-me-container');
      if (element) {
        const headerOffset = 100; // Offset to account for fixed header height
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