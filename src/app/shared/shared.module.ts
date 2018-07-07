import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewComponent } from './add-new/add-new.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [GridComponent, AddNewComponent, DeleteConfirmationComponent],
  exports: [MaterialModule, GridComponent, FormsModule, ReactiveFormsModule, AddNewComponent],
  entryComponents: [DeleteConfirmationComponent]
})
export class SharedModule {}
