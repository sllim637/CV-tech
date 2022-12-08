import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { allIcons, HeroIconModule } from 'ng-heroicon';

import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CarteComponent } from './carte-visite/carte/carte.component';
import { FormComponent } from './carte-visite/form/form.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { ElementComponent } from './cv-list/element/element.component';
import { DefaultImage } from './default-image/default-image.pipe';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailsComponent } from './cv/details/details.component';
import { FormAuthComponent } from './form-auth/form-auth.component';

@NgModule({
  declarations: [
    DetailsComponent,
    AppComponent,
    CarteVisiteComponent,
    CarteComponent,
    FormComponent,
    CvListComponent,
    CvComponent,
    ElementComponent,
    DefaultImage,
    MiniWordComponent,
    RouterSimulatorComponent,
    DetailsComponent,
    FormAuthComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HeroIconModule.forRoot(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
