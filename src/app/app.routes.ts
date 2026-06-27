import { Routes } from '@angular/router';
import path from 'path';

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
        path: "login",
        pathMatch: "full",
        loadComponent: () => {
            return import("./pages/login/login.component")
            .then(c => c.LoginComponent)
        }
    },

];
