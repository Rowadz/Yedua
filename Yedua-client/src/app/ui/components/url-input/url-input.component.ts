import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'yedua-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrlInputComponent implements OnInit {
  @Output() urlChanged: EventEmitter<string>;

  constructor() {
    this.urlChanged = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.urlChanged.emit('https://www.infinitysymbol.net');
  }

  onChange(shouldBeWebsiteUrl: string): void {
    this.urlChanged.emit(shouldBeWebsiteUrl);
  }
}
