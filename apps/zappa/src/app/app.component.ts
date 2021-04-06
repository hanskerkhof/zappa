import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'zappa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zappa';
  public environment = environment;
}
