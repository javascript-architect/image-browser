import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartImageComponent } from './components/smart-image/smart-image.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SmartImageComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [SmartImageComponent]
})
export class SharedModule {}
