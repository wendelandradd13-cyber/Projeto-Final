import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


export const routes: Routes = [

  
     
    {
        path: "",
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

    {
        path: "bau-disfarce",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/bau-disfarce/bau-disfarce.component")
            .then(c => c.BauDisfarceComponent)
        }
    },

    {
        path: "area-tutor",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/area-tutor/area-tutor.component")
            .then(c => c.AreaTutorComponent)
        }
    },

     {
        path: "cadastro",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/cadastro/cadastro.component")
            .then(c => c.CadastroComponent)
        }
    },

    {
    path: '',
    component: HomeComponent, 
    children: [
      { path: 'login', component: LoginComponent },     
      { path: 'cadastro', component: CadastroComponent } 
    ]
  },
  

];
