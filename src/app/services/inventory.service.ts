import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  public dairies = ['Milk', 'Yogurts', 'Butter'];
  public fruitsAndVegetables = ['Broccoli', 'Apples'];
  public meatAndEggs = ['Chicken', 'Eggs'];
}
