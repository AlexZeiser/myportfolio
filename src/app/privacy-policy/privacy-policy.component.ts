import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';

/**
 * The `PrivacyPolicyComponent` represents the privacy policy page of the application.
 * It includes the menu bar and footer components and supports internationalization.
 */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}