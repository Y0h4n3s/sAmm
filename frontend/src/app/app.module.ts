import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMessagesComponent } from './user-messages/user-messages.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMessagesComponent,
    ConversationsComponent,
    MessageWriterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
