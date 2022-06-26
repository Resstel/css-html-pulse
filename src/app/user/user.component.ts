import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) 
  { 
    this.userService.change.subscribe((val) => {
      console.log("count",this.userService.count)
    })
  }

  ngOnInit(): void {
    
  }

}
