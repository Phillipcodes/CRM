import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}
