import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontColorPipePipe } from './pipes/font-color-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FontColorPipePipe],
  exports: [FontColorPipePipe],
})
export class FontColorModule { }
