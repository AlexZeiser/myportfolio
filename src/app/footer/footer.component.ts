import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  activeFooterButton: string = '';

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
