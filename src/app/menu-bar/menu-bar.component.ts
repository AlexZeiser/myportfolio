/* import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  activeLanguage: string = localStorage.getItem('language') || 'en';

  constructor(private router: Router) {
  }
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  changeLanguage(language: string) {
    const currentLanguage = this.translateService.currentLang || 'en';

    if (currentLanguage !== language) {
      this.translateService.use(language);
      localStorage.setItem('language', language);
      this.activeLanguage = language;
    }
  }


  activeButton: string = '';

  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToWhyMe(): void {
    this.setActiveButton('why-me-button');

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
    this.setActiveButton('skills-button');

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
    this.setActiveButton('projects-button');

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
    this.setActiveButton('contact-button');

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
 */

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  activeLanguage: string = localStorage.getItem('language') || 'en';
  activeButton: string = '';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  changeLanguage(language: string) {
    const currentLanguage = this.translateService.currentLang || 'en';
    if (currentLanguage !== language) {
      this.translateService.use(language);
      localStorage.setItem('language', language);
      this.activeLanguage = language;
    }
  }

  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  navigateToWhyMe(): void {
    this.setActiveButton('why-me-button');
    this.closeMenuIfOpen();

    this.router.navigate(['/why-me-section'], { fragment: 'why-me-section' }).then(() => {
      this.scrollToSection('why-me-section');
    });
  }

  navigateToSkills(): void {
    this.setActiveButton('skills-button');
    this.closeMenuIfOpen();

    this.router.navigate(['/my-skills-section'], { fragment: 'my-skills-section' }).then(() => {
      this.scrollToSection('my-skills-section');
    });
  }

  navigateToProjects(): void {
    this.setActiveButton('projects-button');
    this.closeMenuIfOpen();

    this.router.navigate(['/my-projects-section'], { fragment: 'my-projects-section' }).then(() => {
      this.scrollToSection('my-projects-section');
    });
  }

  navigateToContactMe(): void {
    this.setActiveButton('contact-button');
    this.closeMenuIfOpen();

    this.router.navigate(['/contact-me-section'], { fragment: 'contact-me-container' }).then(() => {
      this.scrollToSection('contact-me-container');
    });
  }

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

  private closeMenuIfOpen(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
