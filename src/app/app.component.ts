import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareilOne = 'Machene a laver';
  appareilTwo = 'Television';
  appareilThree = 'Ordinateur';

  constructor(){
    setTimeout(() => {
        this.isAuth = true;
      }, 3000
    );
  }
  onAllumer(){
    alert("ecco mi lass")
    console.log('On allume tout!')
  }
}
