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
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatIconModule,MatTooltipModule,MatDialogModule,MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  user = new User();
 allUsers: any[]  = []
  constructor(public dialog:MatDialog) {
    this.user.firstName

  }


ngOnInit(): void {
  this.subToUsers();
}


  openDialog() {
this.dialog.open(DialogAddUserComponent)
  }

  subToUsers() {
    const userCollection = collection(this.firestore, 'users');
    collectionData(userCollection).subscribe(changes => {
      console.log('All users:', changes);
      this.allUsers = changes
    });
  }
}
