import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { ImprintPageComponent } from "../imprint-page/imprint-page.component";
import { CommonModule } from '@angular/common';

/**
 * Component for the footer section of the application.
 * Handles visibility of certain footer links and manages active button states.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, MenuBarComponent, ImprintPageComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /**
   * Stores the ID of the currently active footer button.
   * @type {string}
   */
  activeFooterButton: string = '';

  /**
   * Controls the visibility of certain footer links.
   * @type {boolean}
   */
  isVisible: boolean = true;

  /**
   * Injects the Angular Router for navigation and URL management.
   * @type {Router}
   */
  private router = inject(Router);

  /**
   * Injects the TranslateService for handling translations.
   * @type {TranslateService}
   */
  private translateService = inject(TranslateService);

  /**
   * Initializes the component and sets up the router event subscription.
   * Hides footer links when the current URL matches '/imprint' or '/privacy-policy'.
   * Scrolls the page to the top when the route changes.
   */
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.isVisible = !(currentUrl === '/imprint' || currentUrl === '/privacy-policy');
      window.scrollTo(0, 0);
    });
  }

  /**
   * Sets the active footer button based on the button ID.
   * @param {string} buttonId - The ID of the button to set as active.
   */
  setActiveFooterButton(buttonId: string): void {
    this.activeFooterButton = buttonId;
  }

  /**
   * Scrolls the window to the top of the page with a smooth animation.
   */
  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}