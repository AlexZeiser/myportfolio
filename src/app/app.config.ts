import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

/**
 * Factory function to create a `TranslateHttpLoader` instance.
 * This loader is used by the `TranslateModule` to load translation files.
 *
 * @param {HttpClient} http - Angular `HttpClient` instance for making HTTP requests.
 * @returns {TranslateHttpLoader} - The configured `TranslateHttpLoader` instance.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * Angular application configuration object. It specifies providers for
 * routing, HTTP client, and translation services.
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Provides router configuration for the application.
    provideRouter(routes),
    
    // Provides HTTP client services for making HTTP requests.
    provideHttpClient(),
    
    // Import providers for HTTP client and translation services.
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};