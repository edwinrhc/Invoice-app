import {Component, Input} from '@angular/core';
import {Invoice} from "../../models/invoice";

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html'
})
export class TotalComponent {

  @Input() total: number = 0;
}
