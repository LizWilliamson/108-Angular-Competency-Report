import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = "Liz";

  test(){
    console.log('Oh hay, Look who clicked the button');

    this.name = 'Something Different!';
  }
}
