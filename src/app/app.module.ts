import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventBirthdayModule } from './event-birthday/event-birthday.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EventBirthdayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
