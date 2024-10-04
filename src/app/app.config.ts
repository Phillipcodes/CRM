import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(MatNativeDateModule), // Importiere das NativeDateModule hier
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDWFMXm2BXY5Ap4gyDZ6OTdUzw_eVtV2jc',
        authDomain: 'simple-crm-c7f91.firebaseapp.com',
        projectId: 'simple-crm-c7f91',
        storageBucket: 'simple-crm-c7f91.appspot.com',
        messagingSenderId: '138071672288',
        appId: '1:138071672288:web:ddc99393cc35b5c5389785',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
