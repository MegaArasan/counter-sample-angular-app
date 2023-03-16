import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';
import { OddcomponentComponent } from './oddcomponent/oddcomponent.component';
import { EvencomponetComponent } from './evencomponet/evencomponet.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecomponentComponent,
    OddcomponentComponent,
    EvencomponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
