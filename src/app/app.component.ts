import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { WhyMeSectionComponent } from "./why-me-section/why-me-section.component";
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuBarComponent,
    HeroSectionComponent,
    WhyMeSectionComponent,
    MySkillsSectionComponent,
    MyProjectsSectionComponent,
    ContactMeSectionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}