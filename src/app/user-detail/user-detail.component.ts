import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { collection, Firestore,doc,getDoc, docData } from '@angular/fire/firestore';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatIcon,MatButton,MatButtonModule,MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId:string |null = ''
  user:User = new User();

  constructor(private route:ActivatedRoute, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getUser();
    console.log('userid', this.userId);
    
  }

  getUser() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`)
    docData(userDocRef).subscribe((user:any)=> {
      this.user= new User(user)
   
    
    
      
    })
  }
  
  editMenu() {
    const dialog  = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
     const dialog = this.dialog.open(DialogEditUserComponent)
    dialog.componentInstance.user = new User(this.user)
    dialog.componentInstance.userId = this.userId;
    dialog.componentInstance.birthDate = new Date(this.user.birthDate)
  }
}

  