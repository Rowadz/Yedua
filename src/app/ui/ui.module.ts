import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolBarComponent } from './components/app-tool-bar/app-tool-bar.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [AppToolBarComponent],
  imports: [CommonModule, MatModule],
  exports: [AppToolBarComponent]
})
export class UIModule {}
