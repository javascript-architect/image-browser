import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ZoomImageDirective } from './directives/zoom-image.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ImageCardComponent,
    ZoomImageDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
