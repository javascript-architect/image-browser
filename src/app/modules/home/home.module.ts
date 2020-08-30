import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';
import { ZoomImageDirective } from './directives/zoom-image.directive';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ImageComponent, ZoomImageDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
