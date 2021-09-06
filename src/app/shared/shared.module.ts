import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent],
  exports: [CommonModule, FormsModule, StarComponent]
})
export class SharedModule {}
