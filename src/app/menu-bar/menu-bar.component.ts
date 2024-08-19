
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  activeLanguage: string = localStorage.getItem('language') || 'en';
  activeButton: string = '';
  isMenuOpen: boolean = false;
  isVisible: boolean = true;

  constructor(private router: Router) { }

  private translateService = inject(TranslateService);

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);

    // Überwache Router-Änderungen
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {      
      const currentUrl = this.router.url;
      this.isVisible = !(currentUrl === '/imprint' || currentUrl === '/privacy-policy');
      window.scrollTo(0, 0);
    });
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

    this.router.navigate([], { fragment: 'why-me-section' }).then(() => {
      this.scrollToSection('why-me-section');
    });
  }

  navigateToSkills(): void {
    this.setActiveButton('skills-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'my-skills-section' }).then(() => {
      this.scrollToSection('my-skills-section');
    });
  }

  navigateToProjects(): void {
    this.setActiveButton('projects-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'my-projects-section' }).then(() => {
      this.scrollToSection('my-projects-section');
    });
  }

  navigateToContactMe(): void {
    this.setActiveButton('contact-button');
    this.closeMenuIfOpen();

    this.router.navigate([], { fragment: 'contact-me-container' }).then(() => {
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
