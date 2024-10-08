import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';

/**
 * The `AppComponent` is the root component of the application. It is responsible for rendering
 * the main layout including the `MenuBarComponent` and `FooterComponent`. It also handles
 * scrolling to specific fragments in the view based on the URL fragment.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  /**
   * The title of the application.
   * @type {string}
   */
  title = 'portfolio';

  /**
   * Creates an instance of `AppComponent`.
   * @param {ActivatedRoute} route - Angular ActivatedRoute service to access route information.
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   * This method subscribes to route fragment changes and scrolls the view to the element
   * identified by the fragment if it exists.
   * 
   * @returns {void}
   */
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