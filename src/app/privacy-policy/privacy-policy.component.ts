import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

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
  // Currently, this component does not have any additional logic or properties.
}