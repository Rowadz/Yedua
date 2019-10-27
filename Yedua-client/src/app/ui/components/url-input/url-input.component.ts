import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'yedua-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrlInputComponent {
  @Output() urlChanged: EventEmitter<string>;

  constructor() {
    this.urlChanged = new EventEmitter<string>();
  }

  onChange(shouldBeWebsiteUrl: string): void {
    this.urlChanged.emit(shouldBeWebsiteUrl);
  }
}
