import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-mi-propio-two-way-binding',
  templateUrl: './cmp-mi-propio-two-way-binding.component.html',
  styleUrls: ['./cmp-mi-propio-two-way-binding.component.css']
})
export class CmpMiPropioTwoWayBindingComponent implements OnInit {
  
  producto: string = "Iphone";
  
  constructor() { }

  ngOnInit() {}

  recoger(val:string = ""){
    this.producto = val;
  }

  resetProducto(){
    this.producto = "";
  }

}
