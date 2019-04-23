import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide'
})
export class HidePipe implements PipeTransform {

  transform(words: string, args?: any): string {
    let res = [];
    let arrayPalabras = words.split(" ");
  for(let palabra of arrayPalabras){
    if(['caballo', 'pupitaa'].includes(palabra)){
      res.push('*');
    } else {
      res.push(palabra);
    }
  }
  return res.join(" ");
 
  //Funciona igual, menos codigo, replace
  // let caballo = words.replace(/caballo/gi, '$');
  // let pupita = caballo.replace(/pupitaa/gi, '*');

  // return pupita;
  }

}
