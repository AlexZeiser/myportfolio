import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WhyMeSectionComponent } from "./why-me-section/why-me-section.component";
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    WhyMeSectionComponent,
    MySkillsSectionComponent,
    MyProjectsSectionComponent,
    ContactMeSectionComponent,
    FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}