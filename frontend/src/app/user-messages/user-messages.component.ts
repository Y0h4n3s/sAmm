import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message.component'

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss']
})
export class UserMessagesComponent implements OnInit {
  test: Message = {
    time: 1,
    message: "yahooooo",
    read: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
