import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,MatCard,MatCardContent,MatCardHeader,MatCardTitle],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

}
