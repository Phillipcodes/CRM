import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';

import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddUserComponent,FormsModule,MatDialogModule, ],
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
      provideFirestore(() => getFirestore()),provideAnimationsAsync()],
      
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
