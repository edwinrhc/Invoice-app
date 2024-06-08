import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InvoiceComponent} from "./components/invoice/invoice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invoice-app-front';
}
