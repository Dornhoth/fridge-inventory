import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-fruits-and-vegetables',
  templateUrl: './fruits-and-vegetables.component.html',
  styleUrls: ['./fruits-and-vegetables.component.scss']
})
export class FruitsAndVegetablesComponent implements OnInit {
  fruitsAndVegetables: string[];

  constructor(
    private inventoryService: InventoryService,
  ) { }

  ngOnInit(): void {
    this.fruitsAndVegetables = this.inventoryService.fruitsAndVegetables;
  }
}
