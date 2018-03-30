import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontColor'
})
export class FontColorPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "white";
  }

}
