import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Computadora } from '../Componentes/dominio/Computadora';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  urlListar='http://localhost:9001/computadora/api/all';
  urlGuardar='http://localhost:9001/computadora/api/save';
  urlEditar='http://localhost:9001/computadora/api/edit';
  urlBuscar='http://localhost:9001/computadora/api/search';
  urlEliminar='http://localhost:9001/computadora/api/delete';

  listar(){
    return this.http.get<Computadora[]>(this.urlListar);
  }

  guardar(computadora : Computadora){
    return this.http.post<Computadora>(this.urlGuardar, computadora);
  }

  editar(computadora : Computadora){
    return this.http.post<Computadora>(this.urlEditar, computadora);
  }

  buscar(computadora : Computadora){
    return this.http.post<Computadora>(this.urlBuscar, computadora);
  }

  eliminar(computadora : Computadora){
    return this.http.post<Computadora>(this.urlEliminar, computadora);
  }

}
