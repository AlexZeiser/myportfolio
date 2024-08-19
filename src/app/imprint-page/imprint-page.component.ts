import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent, TranslateModule],
  templateUrl: './imprint-page.component.html',
  styleUrls: ['./imprint-page.component.scss']
})
export class ImprintPageComponent {}