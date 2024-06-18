import { Injectable } from '@angular/core';
import {Invoice} from "../models/invoice";
import {invoiceData} from "../data/invoice.data";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice  = invoiceData
  constructor() { }


  getInvoice():Invoice{
    const total = this.calculateTotal()
    return {... this.invoice, total: total};
  }

  calculateTotal(){
    let total = 0; // Se inicia
    this.invoice.items.forEach(item => {
      total += item.total();
    });
    return total;
  }
}
