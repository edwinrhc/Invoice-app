import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from "../../models/item";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  }

  onSubmit(): void{
    this.addItemEventEmitter.emit({id: this.counterId,...this.item});
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: '',
    }
  }


}
