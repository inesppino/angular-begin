import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})

export class MarcarDirective{
  defaultColor: string ="white";
  @Input() colorFondo: string ="red";
  @HostBinding('style.backgroundColor') color: string;

  constructor(private elemRef: ElementRef) { 
  //   elemRef.nativeElement.style.backgroundColor = this.colorFondo;
  }

  // ngOnInit(){
  //   this.elemRef.nativeElement.style.backgroundColor = this.colorFondo;
  // }
  
  @HostListener('mouseover') pasarPorEncima(){
    // this.elemRef.nativeElement.style.backgroundColor = this.colorFondo;
    this.pintar(this.colorFondo);
  }

  @HostListener('mouseout') fueraDelTexto(){
    // this.elemRef.nativeElement.style.backgroundColor = this.defaultColor;
    this.pintar(this.defaultColor);
  }

  pintar(color:string){
    this.color = color;
  }
  
}
