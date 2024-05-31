import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Computadora } from '../dominio/Computadora';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

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

editar(){
  this.service.editar(this.computadora).subscribe((data:any) =>{

    if(data.Mensaje=="Se edito la computadora"){
      Swal.fire({
        title: "Editado!",
        icon: "success"
      });
      this.router.navigate(['listar']);
       }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "NO se edito!",
        });
      console.error("Error NO guardo", data.Mensaje);
    }

  })
}

}
