import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-dialog-edit-user',
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
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

  }
  firestore: Firestore = inject(Firestore);
user!:User;
userId!: string | null;
loading:boolean = false;
birthDate!:Date;
 async saveUser() {
  const userDocRef= doc(this.firestore, `users/${this.userId}`)
  this.loading = true;
 await updateDoc(userDocRef, this.user.toJSON())
 this.loading = false;
 this.dialogRef.close()
}
}
