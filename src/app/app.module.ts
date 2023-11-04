import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BioAboutmeComponent } from './bio-aboutme/bio-aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    BioAboutmeComponent,
    SkillsComponent,
    PortfolioProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
