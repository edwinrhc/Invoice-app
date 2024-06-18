import {Component, OnInit} from '@angular/core';

import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {TotalComponent} from "../total/total.component";
import {FormItemComponent} from "../form-item/form-item.component";
import {Item} from "../../models/item";
import {InvoiceService} from "../../services/invoice.service";



@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    TotalComponent,
    FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService)  {

  }

  ngOnInit(): void {
        this.invoice = this.service.getInvoice();
    }

  remoteItem(id: number): void {
    this.invoice = this.service.remove(id);
  }

  addItem(item:Item){
    this.invoice = this.service.save(item);
  }

}
