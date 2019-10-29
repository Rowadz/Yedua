import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Shape } from '../../../models';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'yedua-select-shape',
  templateUrl: './select-shape.component.html',
  styleUrls: ['./select-shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectShapeComponent {
  @Output() shpaeChanged: EventEmitter<Shape>;
  constructor() {
    this.shpaeChanged = new EventEmitter<Shape>();
  }

  onChange({ value }: MatRadioChange): void {
    this.shpaeChanged.emit(value);
  }
}
