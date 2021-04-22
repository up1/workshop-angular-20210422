import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toUpperCase() + (args[0] !== undefined ? args[0] : '');
  }

}
