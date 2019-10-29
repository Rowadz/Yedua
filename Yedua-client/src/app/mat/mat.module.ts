import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  // imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule
  ]
})
export class MatModule {}
