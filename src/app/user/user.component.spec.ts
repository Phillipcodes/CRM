import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers:[{provide:MatDialogRef,useValue: []},provideFirestore(() => getFirestore()),
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
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
