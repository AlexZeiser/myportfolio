import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

/**
 * The `MenuBarComponent` is responsible for rendering the application's navigation menu.
 * It handles language changes, menu toggling, navigation to different sections, and visibility control based on the current route.
 */
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  /** Stores the currently active language. */
  activeLanguage: string = localStorage.getItem('language') || 'en';

  /** Stores the ID of the currently active menu button. */
  activeButton: string = '';

  /** Indicates whether the menu is open or closed. */
  isMenuOpen: boolean = false;

  /** Controls the visibility of the menu bar based on the current route. */
  isVisible: boolean = true;

  /** Router instance for navigating between routes. */
  constructor(private router: Router) {}

  /** TranslateService instance for managing language translations. */
  private translateService = inject(TranslateService);

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Sets up initial language and listens for router events to control visibility.
   */
  ngOnInit(): void {
    // Set default language from local storage or fallback to 'en'
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);

    // Listen to router events to control visibility and scroll to top
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.isVisible = !(currentUrl === '/imprint' || currentUrl === '/privacy-policy');
      window.scrollTo(0, 0);
    });
  }

  /**
   * Changes the application's active language.
   * @param {string} language - The new language to set.
   */
  changeLanguage(language: string) {
    const currentLanguage = this.translateService.currentLang || 'en';
    if (currentLanguage !== language) {
      this.translateService.use(language);
      localStorage.setItem('language', language);
      this.activeLanguage = language;
    }
  }

  /**
   * Sets the active button in the menu.
   * @param {string} buttonId - The ID of the button to set as active.
   */
  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }

  /**
   * Toggles the visibility of the menu.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Smoothly scrolls to the top of the page.
   */
  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Navigates to the "Why Me" section and scrolls to it.
   */
  navigateToWhyMe(): void {
    this.setActiveButton('why-me-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'why-me-section' }).then(() => {
      this.scrollToSection('why-me-section');
    });
  }

  /**
   * Navigates to the "Skills" section and scrolls to it.
   */
  navigateToSkills(): void {
    this.setActiveButton('skills-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'my-skills-section' }).then(() => {
      this.scrollToSection('my-skills-section');
    });
  }

  /**
   * Navigates to the "Projects" section and scrolls to it.
   */
  navigateToProjects(): void {
    this.setActiveButton('projects-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'my-projects-section' }).then(() => {
      this.scrollToSection('my-projects-section');
    });
  }

  /**
   * Navigates to the "Contact Me" section and scrolls to it.
   */
  navigateToContactMe(): void {
    this.setActiveButton('contact-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'contact-me-container' }).then(() => {
      this.scrollToSection('contact-me-container');
    });
  }

  /**
   * Scrolls smoothly to a specific section on the page.
   * @param {string} sectionId - The ID of the section to scroll to.
   * @private
   */
  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Closes the menu if it is currently open.
   * @private
   */
  private closeMenuIfOpen(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}