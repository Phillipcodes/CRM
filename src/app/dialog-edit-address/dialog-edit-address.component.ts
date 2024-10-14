import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule
  
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  userId!:string | null;
  loading:boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {

  }

  async saveUser() {
    
    const userDocRef= doc(this.firestore, `users/${this.userId}`)
    this.loading = true;
   await updateDoc(userDocRef, this.user.toJSON())
   this.loading = false;
   this.dialogRef.close()
  }
}
