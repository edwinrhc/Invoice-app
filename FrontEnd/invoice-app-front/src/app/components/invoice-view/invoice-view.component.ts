import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html'
})
export class InvoiceViewComponent {

  @Input() id!: number;
  @Input() name!: string;


}
