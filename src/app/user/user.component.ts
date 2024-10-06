import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import {Firestore,collectionData,collection,addDoc,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RouterModule, } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatIconModule,MatTooltipModule,MatDialogModule,MatCardModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
 allUsers: User[] = []
  constructor(public dialog:MatDialog) {
 

  }


ngOnInit(): void {
  this.subToUsers();
}


  openDialog() {
this.dialog.open(DialogAddUserComponent)
  }

  subToUsers() {
    const userCollection = collection(this.firestore, 'users');
    collectionData(userCollection,{ idField: 'userId' }).subscribe(changes => {
      console.log('All users:', changes);
      this.allUsers = []
      changes.forEach(doc => {
        this.allUsers.push(new User(doc as User)) // gibt ann das die DocumentData aufjedenfall vom typen User
      })
    });
  }

 
}
