import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
	declarations: [GridComponent],
	exports: [MaterialModule, GridComponent, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class SharedModule {}
