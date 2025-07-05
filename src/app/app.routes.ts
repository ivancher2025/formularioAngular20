import { Routes } from '@angular/router';
import { FormuNormal } from './formu-normal/formu-normal';
import { FormuReactivo } from './formu-reactivo/formu-reactivo';

export const routes: Routes = [
    {
    path:  "",
    component: FormuNormal,
    title: "Formulario Normal"
},
{
    path: "reactivo",
    component: FormuReactivo,
    title: "Formulario Reactivo"

}
];
