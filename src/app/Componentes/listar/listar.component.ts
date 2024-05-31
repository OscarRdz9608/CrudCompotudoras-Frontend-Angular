import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Computadora } from '../dominio/Computadora';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  computadora : Computadora = new Computadora();

 constructor(private router:Router, private service:ServicioService){}
ngOnInit(): void {
  this.listarC();
}
lista: Computadora[];
listarC(){
this.service.listar().subscribe(data =>{
  this.lista = data;
  console.log("Recibiendo los datos del servidor ->"+JSON.stringify(this.lista));
})
}



buscar(){
  let id = localStorage.getItem("id");
  this.computadora.id =+ Number(id);
  this.service.buscar(this.computadora).subscribe(data=>{
    this.computadora=data;
    console.log(JSON.stringify(this.computadora));
  })
}

editarC(computadora: Computadora ){
 localStorage.setItem("id", computadora.id.toString());
  this.router.navigate(['editar']);
}

eliminarC(computadora: Computadora ){
  localStorage.setItem("id", computadora.id.toString());
  this.router.navigate(['eliminar']);
 }

}
