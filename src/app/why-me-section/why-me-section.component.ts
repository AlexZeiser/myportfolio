import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

/**
 * The `WhyMeSectionComponent` represents a section of the application where users can learn
 * about the reasons for choosing the service or individual. It includes navigation functionality
 * to other sections of the page.
 */
@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me-section.component.html',
  styleUrls: ['./why-me-section.component.scss']
})
export class WhyMeSectionComponent implements OnInit {

  /**
   * Creates an instance of `WhyMeSectionComponent`.
   * @param {Router} router - Angular Router service to handle navigation.
   */
  constructor(private router: Router) { }

  /**
   * Navigates to the "Contact Me" section on the page.
   * This method will scroll smoothly to the section identified by 'contact-me-container',
   * adjusting for a fixed header offset.
   * 
   * @returns {void}
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
  ngOnInit() {
    AOS.init();
  }
}