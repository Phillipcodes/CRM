import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef,  } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent,FormsModule,MatDialogModule],
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
      provideFirestore(() => getFirestore()),provideAnimationsAsync()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
