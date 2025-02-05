import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((mod) => mod.CustomersModule),
  },
  {
    path: 'pins',
    loadChildren: () =>
      import('./pins/pins.module').then((mod) => mod.PinsModule),
  },
];
