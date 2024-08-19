import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { ImprintPageComponent } from "../imprint-page/imprint-page.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, MenuBarComponent, ImprintPageComponent, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  activeFooterButton: string = '';
  isVisible: boolean = true;

  private router = inject(Router);
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentUrl = this.router.url;
      this.isVisible = !(currentUrl === '/imprint' || currentUrl === '/privacy-policy');
      window.scrollTo(0, 0);
    });
  }

  setActiveFooterButton(buttonId: string): void {
    this.activeFooterButton = buttonId;
  }

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}