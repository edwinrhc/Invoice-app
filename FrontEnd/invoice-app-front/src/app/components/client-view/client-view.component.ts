import {Component, Input} from '@angular/core';
import {Client} from "../../models/client";

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent {

  @Input() client: Client = new Client();

}
