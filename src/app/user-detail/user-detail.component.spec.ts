import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent,RouterModule.forRoot([]),],
      providers:[provideFirestore(() => getFirestore()),
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
        provideFirestore(() => getFirestore()),]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
