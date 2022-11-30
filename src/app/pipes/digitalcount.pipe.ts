import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitalcount'
})
export class DigitalcountPipe implements PipeTransform {

  transform(value:number): number {
    return value.toString().length;
  }

}
