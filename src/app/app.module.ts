import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { PassionsComponent } from './passions/passions.component';
import { HomeComponent } from './home/home.component';
import { ButtonCollapseComponent } from './button-collapse/button-collapse.component';
import { SlidesComponent } from './slides/slides.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page1Component,
    PassionsComponent,
    HomeComponent,
    ButtonCollapseComponent,
    SlidesComponent,
    EducationComponent,
    PersonalComponent,
    ConnectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPageScrollCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
