import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-smart-image',
  templateUrl: './smart-image.component.html',
  styleUrls: ['./smart-image.component.scss'],
})
export class SmartImageComponent implements OnChanges {
  @Input() image: string;

  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnChanges(): void {
    this.isLoading = true;
  }

  hideLoader(): void {
    this.isLoading = false;
  }
}
