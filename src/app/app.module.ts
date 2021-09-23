import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ofComponent } from './component/of/of.component';
import { FromComponent } from './component/from/from.component';
import { FromEventComponent } from './component/from-event/from-event.component';
import { SwitchMapComponent } from './component/switch-map/switch-map.component';
import { NextPageComponent } from './pages/next-page/next-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ofComponent,
    FromComponent,
    FromEventComponent,
    SwitchMapComponent,
    NextPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
