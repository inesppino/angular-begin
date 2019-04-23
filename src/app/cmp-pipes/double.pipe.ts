import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(precio: number, arg1?: number, arg2?: number): number {
    let resultado = precio*2
    if (arg1){
      resultado += arg1;
      if (arg2){
        resultado -= arg2;
      } 
    }
   return resultado;
  }
}
