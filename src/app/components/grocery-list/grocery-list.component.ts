import { Component, OnInit } from '@angular/core';
import { GroceryListService } from 'src/app/services/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  list: string;

  constructor(
    private groceryListService: GroceryListService,
  ) { }

  ngOnInit(): void {
    this.list = this.groceryListService.groceryList;
  }

  saveList(list): void {
    this.groceryListService.groceryList = list;
  }
}
