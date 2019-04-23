import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  nombre: string = "Chiquito Ipsum";
  
  descripcion: string ="Lorem fistrum pupita apetecan apetecan diodenoo se calle ustée. Tiene musho peligro está la cosa muy malar quietooor al ataquerl fistro te va a hasé pupitaa no puedor ahorarr a gramenawer fistro. Papaar papaar no te digo trigo por no llamarte Rodrigor va usté muy cargadoo va usté muy cargadoo ahorarr sexuarl no puedor caballo blanco caballo negroorl tiene musho peligro. Amatomaa ahorarr ese pedazo de me cago en tus muelas ese hombree diodenoo a wan. De la pradera te va a hasé pupitaa a gramenawer fistro al ataquerl apetecan pecador te va a hasé pupitaa pupita mamaar. Mamaar tiene musho peligro no puedor apetecan diodeno mamaar sexuarl te va a hasé pupitaa diodenoo al ataquerl no puedor. Benemeritaar diodenoo qué dise usteer a gramenawer llevame al sircoo hasta luego Lucas apetecan diodenoo.";
  
  precio: number =3.2;
  
  fecha: Date = new Date(2019, 3, 18);

  nombres = ['Robb', 'Arya', 'Rickon', 'Sansa', 'Bran', 'Jon'];

  constructor() { }

  ngOnInit() {
  }

  addNombre(nombre){
    this.nombres.push(nombre);
  }
}
