import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  private list: string;

  get groceryList(): string {
    return this.list;
  }

  set groceryList(list: string) {
    this.list = list;
  }
}
