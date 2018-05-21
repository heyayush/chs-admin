import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [GridComponent, AddNewComponent],
  exports: [MaterialModule, GridComponent, FormsModule, ReactiveFormsModule, AddNewComponent]
})
export class SharedModule {}
