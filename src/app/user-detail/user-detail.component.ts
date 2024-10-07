import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,MatCard,MatCardContent,MatCardHeader,MatCardTitle],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId:string|null = ''

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
   
    
  }

}
