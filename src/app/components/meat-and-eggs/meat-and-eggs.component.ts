import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-meat-and-eggs',
  templateUrl: './meat-and-eggs.component.html',
  styleUrls: ['./meat-and-eggs.component.scss']
})
export class MeatAndEggsComponent  implements OnInit {
  meatAndEggs: string[];

  constructor(
    private inventoryService: InventoryService,
  ) { }

  ngOnInit(): void {
    this.meatAndEggs = this.inventoryService.meatAndEggs;
  }

}
