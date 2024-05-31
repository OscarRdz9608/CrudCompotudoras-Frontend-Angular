import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Computadora } from '../dominio/Computadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  constructor(private router: Router, private service: ServicioService){}

  ngOnInit(): void {
    this.buscar();
  }

  computadora : Computadora = new Computadora();

  buscar(){
    let id = localStorage.getItem("id");
    this.computadora.id =+ Number(id);
    this.service.buscar(this.computadora).subscribe(data=>{
      this.computadora=data;
      console.log(JSON.stringify(this.computadora));
    })
  }

  eliminar(){
    this.service.eliminar(this.computadora).subscribe((data:any)=>{
      if(data.Mensaje=="Se elimino la computadora"){
        Swal.fire({
          title: "Eliminado!",
          icon: "success"
        });
        this.router.navigate(['listar']);
         }else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "NO se Elimino!",
          });
        console.error("Error NO elimino", data.Mensaje);
      }
    })
  }

cancelar(){
  this.router.navigate(['listar']);
}
}
