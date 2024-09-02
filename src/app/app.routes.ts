import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
      }
    ]

  },

];
