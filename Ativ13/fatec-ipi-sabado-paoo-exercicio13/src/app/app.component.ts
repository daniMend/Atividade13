import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto: string;

  adicionar(texto): void {
    console.log(texto)
    this.texto = texto;
  }
}
