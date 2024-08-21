import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';

/**
 * Component representing the imprint page of the application.
 * Displays the imprint information along with a menu bar and footer.
 */
@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent, TranslateModule],
  templateUrl: './imprint-page.component.html',
  styleUrls: ['./imprint-page.component.scss']
})
export class ImprintPageComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}