import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/homer/homer.component';
import { mapToResolve } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    BackToTopComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PreLoaderComponent,
    ContactModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
