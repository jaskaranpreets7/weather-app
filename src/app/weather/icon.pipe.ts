import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon'
})

export class IconPipe implements PipeTransform {

  transform(value: number, args?: any): any {
  }

}
