import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/login/login.component")
            .then(c => c.LoginComponent)
        },
    },
     
    {
        path: "home",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/home/home.component")
            .then(c => c.HomeComponent)
        },
    },

    {
        path: "biscoitos",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/biscoitos/biscoitos.component")
            .then(c => c.BiscoitosComponent)
        },
    },

    {
        path: "salsicha-cia",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/salsicha-cia/salsicha-cia.component")
            .then(c => c.SalsichaCiaComponent)
        },
    },

    {
        path: "linha-antimonstro",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/linha-antimonstro/linha-antimonstro.component")
            .then(c => c.LinhaAntimonstroComponent )
        }
    },

    {
        path: "maquina-misterio",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/maquina-misterio/maquina-misterio.component")
            .then(c => c.MaquinaMisterioComponent)
        }
    },

];
