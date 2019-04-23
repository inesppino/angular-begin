import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(nombre: string, args?: any): string {
    let result = nombre.split("").reverse().join("");
    return result;
  }

}
