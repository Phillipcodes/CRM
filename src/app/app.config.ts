import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    importProvidersFrom(MatNativeDateModule),  // Importiere das NativeDateModule hier
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
};
