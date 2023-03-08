import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div *ngIf = (notificationoption)><p>We are using the Cookies
            </p>
            </div>
            <div class='close' *ngIf = (notificationoption)><button class="btn" (click) = "clickfunction()">X</button></div>`,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }
  notificationoption:boolean = true
  ngOnInit(): void {
  }

  clickfunction()
  {
    this.notificationoption = false
  }

}
