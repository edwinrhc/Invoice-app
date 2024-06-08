import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../services/item.service";
import {Invoice} from "../../models/invoice";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
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
