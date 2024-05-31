import { Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';

export const routes: Routes = [
  {path: 'inicio', component: InicioComponent}, /* Permite llamar al componenete que requieras */
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}, /* Redirecciona al componenete inicio*/
    {path: 'inicio', component: InicioComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'guardar', component: GuardarComponent},
    {path: 'editar', component: EditarComponent},
    {path: 'eliminar', component: EliminarComponent}
];
