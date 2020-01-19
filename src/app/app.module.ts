import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DairiesComponent } from './components/dairies/dairies.component';
import { FruitsAndVegetablesComponent } from './components/fruits-and-vegetables/fruits-and-vegetables.component';
import { MeatAndEggsComponent } from './components/meat-and-eggs/meat-and-eggs.component';
import { FooterButtonComponent } from './components/footer/footer.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { OpenGroceryListButtonComponent } from './components/open-grocery-list-button/open-grocery-list-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DairiesComponent,
    FruitsAndVegetablesComponent,
    MeatAndEggsComponent,
    FooterButtonComponent,
    GroceryListComponent,
    OpenGroceryListButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
