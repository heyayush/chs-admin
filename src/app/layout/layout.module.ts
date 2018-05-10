import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  imports: [CommonModule, SharedModule, AppRoutingModule],
  declarations: [LayoutComponent, AppNavComponent, MainContentComponent],
  exports: [LayoutComponent, AppNavComponent, MainContentComponent]
})
export class LayoutModule {}
