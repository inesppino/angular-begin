import { Directive, ElementRef, HostListener, HostBinding, Input, } from '@angular/core';

@Directive({
  selector: '[appPowermode]'
})
export class PowermodeDirective {

  colorDefault: string = 'black';
  @Input('appPowermode') colorLetra: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') marginT: string;
  @HostBinding('style.marginLeft') marginL: string;
  
  constructor(private elemeRef:ElementRef) { }

  @HostListener('keyup') keyUp(){
    this.colorea(this.colorDefault);
    this.vibrar('0px');
  }

  @HostListener('keydown') keyDown(){
    this.colorea(this.colorLetra);
    this.vibrar('6px');
  
  }

  colorea(color:string){
    this.color = color;
  }

  vibrar(margin:string){
    this.marginL= margin;
    this.marginT = margin;
  }

}
