import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'T35Problema2';

  nombre: string = '';
  email: any = '';
  mensaje: string = '';
  spam: string = '';
  listadatos: Array<object> = [];

  anadir() {
    if (
      this.nombre != '' &&
      this.email != '' &&
      this.mensaje != '' &&
      this.spam == '5'
    ) {
      this.listadatos.push({
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
      });
    }
  }
}
