import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  constructor(public authService: AuthService) {}


}
