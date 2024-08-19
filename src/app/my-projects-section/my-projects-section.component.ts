import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-projects-section.component.html',
  styleUrls: ['./my-projects-section.component.scss']
})
export class MyProjectsSectionComponent {
}