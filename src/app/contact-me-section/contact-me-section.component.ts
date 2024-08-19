import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component for the "Contact Me" section of the application.
 */
@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})
export class ContactMeSectionComponent {
  /**
   * Constructor to inject the necessary dependencies.
   * @param {Router} router - The Angular Router used for navigation.
   */
  constructor(private router: Router) { }

  /**
   * HTTP client for making API requests.
   */
  http = inject(HttpClient);

  /**
   * Data model for the contact form.
   * @type {{ name: string, email: string, message: string, privacyPolicy: boolean }}
   */
  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  }

  /**
   * Flag to indicate whether the mail test mode is active.
   * @type {boolean}
   */
  mailTest = true;

  /**
   * Configuration for the POST request to send the contact form data.
   * @type {{ endPoint: string, body: (payload: any) => string, options: { headers: { 'Content-Type': string, responseType: string } } }}
   */
  post = {
    endPoint: 'http://alex-zeiser-developer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Checks if the contact form is valid.
   * @param {NgForm} form - The contact form to validate.
   * @returns {boolean} - Returns true if the form is valid, otherwise false.
   */
  isFormValid(form: NgForm): boolean {
    return form.form.valid &&
      this.contactData.privacyPolicy &&
      this.contactData.message.trim().length >= 10;
  }

  /**
   * Handles the form submission event.
   * Sends the contact form data to the server if the form is valid.
   * @param {NgForm} ngForm - The contact form to submit.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && this.isFormValid(ngForm) && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            console.info('E-Mail erfolgreich gesendet');
          },
          error: (error) => {
            console.error('Fehler beim Senden der E-Mail:', error);
          },
          complete: () => console.info('Sendevorgang abgeschlossen'),
        });
    } else if (ngForm.submitted && this.isFormValid(ngForm) && this.mailTest) {
      ngForm.resetForm();
      console.info('MailTest aktiv, keine E-Mail gesendet');
    }
  }

  /**
   * Scrolls the window to the top of the page.
   */
  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}