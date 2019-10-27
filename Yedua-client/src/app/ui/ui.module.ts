import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolBarComponent } from './components/app-tool-bar/app-tool-bar.component';
import { MatModule } from '../mat/mat.module';
import { LevelFilterComponent } from './components/level-filter/level-filter.component';

@NgModule({
  declarations: [AppToolBarComponent, LevelFilterComponent],
  imports: [CommonModule, MatModule],
  exports: [AppToolBarComponent, LevelFilterComponent]
})
export class UIModule {}
