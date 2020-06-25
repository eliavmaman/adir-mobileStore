import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MacSectionComponent } from './mac-section/mac-section.component';
import { ProductRightDetailsComponent } from './product-right-details/product-right-details.component';
import { FooterComponent } from './footer/footer.component';
import { IpadSectionComponent } from './ipad-section/ipad-section.component';
import { IphoneSectionComponent } from './iphone-section/iphone-section.component';
import { GadjetsSectionComponent } from './gadjets-section/gadjets-section.component';
import { ProductTopDetailsComponent } from './product-top-details/product-top-details.component';
import { MusicSectionComponent } from './music-section/music-section.component';
import { ProductBottomDetailsComponent } from './product-bottom-details/product-bottom-details.component';
import { AdirComponent } from './adir/adir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    MacSectionComponent,
    ProductRightDetailsComponent,
    FooterComponent,
    IpadSectionComponent,
    IphoneSectionComponent,
    GadjetsSectionComponent,
    ProductTopDetailsComponent,
    MusicSectionComponent,
    ProductBottomDetailsComponent,
    AdirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
