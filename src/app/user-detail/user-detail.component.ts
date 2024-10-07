import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { collection, Firestore,doc,getDoc, docData } from '@angular/fire/firestore';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,MatCard,MatCardContent,MatCardHeader,MatCardTitle],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId:string |null = ''
  user:User = new User();

  constructor(private route:ActivatedRoute) {

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
}
