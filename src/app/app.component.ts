import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./Componentes/inicio/inicio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent]
})
export class AppComponent   {
  title = 'Angular';
  urlLogo = '../assets/images/c27e1c8d-5812-4f69-a5be-6b721550cb96.jpg';



  constructor(private router:Router){}

  listarComputadoras(){
    this.router.navigate(['listar']);
  }

  guardarComputadora(){
    this.router.navigate(['guardar']);
  }

}

