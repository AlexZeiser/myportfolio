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

/**
 * Array of route configurations for the Angular application.
 * Defines the paths and the components associated with each path.
 *
 * @type {Routes}
 */
export const routes: Routes = [
    /**
     * Route for the root path. Displays the `MainComponent`.
     * 
     * @type {Route}
     */
    { path: '', component: MainComponent },

    /**
     * Route for the '/imprint' path. Displays the `ImprintPageComponent`.
     * 
     * @type {Route}
     */
    { path: 'imprint', component: ImprintPageComponent },

    /**
     * Route for the '/privacy-policy' path. Displays the `PrivacyPolicyComponent`.
     * 
     * @type {Route}
     */
    { path: 'privacy-policy', component: PrivacyPolicyComponent },

    /**
     * Route for the '/menu-bar' path. Displays the `MenuBarComponent`.
     * 
     * @type {Route}
     */
    { path: 'menu-bar', component: MenuBarComponent },

    /**
     * Route for the '/hero-section' path. Displays the `HeroSectionComponent`.
     * 
     * @type {Route}
     */
    { path: 'hero-section', component: HeroSectionComponent },

    /**
     * Route for the '/why-me-section' path. Displays the `WhyMeSectionComponent`.
     * 
     * @type {Route}
     */
    { path: 'why-me-section', component: WhyMeSectionComponent },

    /**
     * Route for the '/my-skills-section' path. Displays the `MySkillsSectionComponent`.
     * 
     * @type {Route}
     */
    { path: 'my-skills-section', component: MySkillsSectionComponent },

    /**
     * Route for the '/my-projects-section' path. Displays the `MyProjectsSectionComponent`.
     * 
     * @type {Route}
     */
    { path: 'my-projects-section', component: MyProjectsSectionComponent },

    /**
     * Route for the '/contact-me-section' path. Displays the `ContactMeSectionComponent`.
     * 
     * @type {Route}
     */
    { path: 'contact-me-section', component: ContactMeSectionComponent },

    /**
     * Route for the '/footer' path. Displays the `FooterComponent`.
     * 
     * @type {Route}
     */
    { path: 'footer', component: FooterComponent }
];