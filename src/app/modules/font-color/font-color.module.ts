import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontColorPipe } from './pipes/font-color.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FontColorPipe],
  exports: [FontColorPipe],
})
export class FontColorModule { }
