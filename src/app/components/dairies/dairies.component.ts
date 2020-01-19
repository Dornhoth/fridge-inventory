import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-dairies',
  templateUrl: './dairies.component.html',
  styleUrls: ['./dairies.component.scss']
})
export class DairiesComponent implements OnInit {
  dairies: string[];

  constructor(
    private inventoryService: InventoryService,
  ) { }

  ngOnInit(): void {
    this.dairies = this.inventoryService.dairies;
  }
}
