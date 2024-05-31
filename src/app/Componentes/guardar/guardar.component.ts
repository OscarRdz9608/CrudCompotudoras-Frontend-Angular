import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Computadora } from '../dominio/Computadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent {
  constructor(private router:Router, private service: ServicioService) {}
  computadora: Computadora = new Computadora();

guardarComputadora(){
  this.service.guardar(this.computadora).subscribe((data: any)=>{
    console.log(data);
    if(data.Mensaje=="Se guardo la computadora"){
      Swal.fire({
        title: "Guardado!",
        icon: "success"
      });
      this.router.navigate(['listar']);
       }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "NO se guardo!",
        });
      console.error("Error NO guardo", data.Mensaje);
    }
  })
}
}
