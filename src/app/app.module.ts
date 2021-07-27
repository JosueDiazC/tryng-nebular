import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
