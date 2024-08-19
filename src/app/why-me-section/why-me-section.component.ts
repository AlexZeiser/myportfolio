import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './why-me-section.component.html',
  styleUrls: ['./why-me-section.component.scss']
})
export class WhyMeSectionComponent {
  constructor(private router: Router) { }

  navigateToContactMe(): void {
    this.router.navigate([], { fragment: 'contact-me-container' }).then(() => {
      const element = document.getElementById('contact-me-container');
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}
