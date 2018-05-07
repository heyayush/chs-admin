import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	imports: [CommonModule, MaterialModule],
	declarations: [GridComponent],
	exports: [GridComponent]
})
export class SharedModule {}
