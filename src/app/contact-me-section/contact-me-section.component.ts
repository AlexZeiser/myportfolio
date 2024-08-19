/* import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})
export class ContactMeSectionComponent {
  constructor(private router: Router) { }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  }

  mailTest = false;

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

  isFormValid(form: NgForm): boolean {
    return form.form.valid && 
    this.contactData.privacyPolicy && 
    this.contactData.message.trim().length >= 10;;
  }

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

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
 */

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})
export class ContactMeSectionComponent {
  constructor(private router: Router) { }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  }

  mailTest = false;

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

  isFormValid(form: NgForm): boolean {
    return form.form.valid && 
           this.contactData.privacyPolicy && 
           this.contactData.message.trim().length >= 10;
  }

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

  navigateToHeader(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
