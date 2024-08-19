import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { MyProjectsSectionComponent } from './my-projects-section/my-projects-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImprintPageComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'menu-bar', component: MenuBarComponent },
    { path: 'hero-section', component: HeroSectionComponent },
    { path: 'why-me-section', component: WhyMeSectionComponent },
    { path: 'my-skills-section', component: MySkillsSectionComponent },
    { path: 'my-projects-section', component: MyProjectsSectionComponent },
    { path: 'contact-me-section', component: ContactMeSectionComponent },
    { path: 'footer', component: FooterComponent },

];