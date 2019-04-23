import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-input-output',
  templateUrl: './cmp-input-output.component.html',
  styleUrls: ['./cmp-input-output.component.css']
})
export class CmpInputOutputComponent implements OnInit {

  nombreHijoA:string = ""

  constructor() { }

  ngOnInit() {
  }

  cambiarNombre(nombre){
    this.nombreHijoA = nombre;
  }

}
