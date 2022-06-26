import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  count : number = 0;
change: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  public increment() {
    this.count++;
    this.change.emit();
  }

  decrement() {
    this.count--;
    this.change.emit();
  }
}


