import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolBarComponent } from './components/app-tool-bar/app-tool-bar.component';
import { MatModule } from '../mat/mat.module';
import { LevelFilterComponent } from './components/level-filter/level-filter.component';
import { UrlInputComponent } from './components/url-input/url-input.component';

@NgModule({
  declarations: [AppToolBarComponent, LevelFilterComponent, UrlInputComponent],
  imports: [CommonModule, MatModule],
  exports: [AppToolBarComponent, LevelFilterComponent, UrlInputComponent]
})
export class UIModule {}
