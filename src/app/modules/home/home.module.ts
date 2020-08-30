import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ImageComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HomeComponent]
})
export class HomeModule {}
