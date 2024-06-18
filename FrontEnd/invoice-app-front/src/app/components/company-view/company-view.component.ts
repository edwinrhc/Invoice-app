import {Component, Input} from '@angular/core';
import {Company} from "../../models/company";

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html'
})
export class CompanyViewComponent {

  @Input() company: Company = new Company();

}
