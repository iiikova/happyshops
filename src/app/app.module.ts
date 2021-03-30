import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { YouTubePlayerModule } from '@angular/youtube-player';

// import { VideoComponent } from './video.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HitComponent } from './components/hit/hit.component';
import { DescComponent } from './components/desc/desc.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { OrderComponent } from './components/order/order.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HitComponent,
    DescComponent,
    SkillsComponent,
    CatalogComponent,
    BenefitsComponent,
    FeedbackComponent,
    OrderComponent,
    FormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
