import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../services/item.service";
import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {RowItemComponent} from "../row-item/row-item.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,ClientViewComponent,CompanyViewComponent,ListItemsComponent,RowItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor(private service: InvoiceService)  {

  }

  ngOnInit(): void {
        this.invoice = this.service.getInvoice();
    }

}
