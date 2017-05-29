import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClipboardModule } from 'ngx-clipboard';
import { ModalModule, AlertModule, TooltipModule, BsDropdownModule } from 'ngx-bootstrap';

import { routing } from './app.routing';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { LobbyComponent } from './lobby/lobby.component';
import { WhoComponent } from './who/who.component';
import { LoginModalComponent } from './who/login-modal/login-modal.component';
import { RegisterModalComponent } from './who/register-modal/register-modal.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    JoinComponent,
    LobbyComponent,
    WhoComponent,
    LoginModalComponent,
    RegisterModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ClipboardModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
