import { Component,OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';

/**
 * The `MyProjectsSectionComponent` is responsible for rendering the "My Projects" section of the application.
 * This section typically displays information about the user's projects.
 */
@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-projects-section.component.html',
  styleUrls: ['./my-projects-section.component.scss']
})
export class MyProjectsSectionComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }

}