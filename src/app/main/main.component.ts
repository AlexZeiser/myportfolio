import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { WhyMeSectionComponent } from '../why-me-section/why-me-section.component';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from '../my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from '../contact-me-section/contact-me-section.component';
import { FooterComponent } from '../footer/footer.component';
import { ImprintPageComponent } from "../imprint-page/imprint-page.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuBarComponent, HeroSectionComponent, WhyMeSectionComponent, MySkillsSectionComponent, MyProjectsSectionComponent, ContactMeSectionComponent, FooterComponent, ImprintPageComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}