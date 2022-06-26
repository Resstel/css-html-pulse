import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'script-angular';
constructor(private userService : UserService){

}
  public incerement(){
    this.userService.increment()
  }
}
