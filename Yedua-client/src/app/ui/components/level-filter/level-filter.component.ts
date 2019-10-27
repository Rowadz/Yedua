import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Lvl } from 'src/app/models';

@Component({
  selector: 'yedua-level-filter',
  templateUrl: './level-filter.component.html',
  styleUrls: ['./level-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelFilterComponent {
  @Output() lvlChanged: EventEmitter<Lvl>;

  constructor() {
    this.lvlChanged = new EventEmitter<Lvl>();
  }

  onChange({ value }: MatRadioChange): void {
    this.lvlChanged.emit(value);
  }
}
