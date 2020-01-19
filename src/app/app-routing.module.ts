import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DairiesComponent } from './components/dairies/dairies.component';
import { FruitsAndVegetablesComponent } from './components/fruits-and-vegetables/fruits-and-vegetables.component';
import { MeatAndEggsComponent } from './components/meat-and-eggs/meat-and-eggs.component';


const routes: Routes = [
  {
    path: 'dairies',
    component: DairiesComponent,
  },
  {
    path: 'fruitsAndVegetables',
    component: FruitsAndVegetablesComponent,
  },
  {
    path: 'meatAndEggs',
    component: MeatAndEggsComponent,
  },
  {
    path: '',
    redirectTo: '/dairies',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
