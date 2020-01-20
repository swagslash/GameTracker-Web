import {NgModule} from '@angular/core';
import {LandingPageRoutingModule} from './landing-page-routing.module';
import {LandingPageComponent} from './landing-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    LandingPageRoutingModule,
    MatGridListModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  declarations: [
    LandingPageComponent
  ],
})
export class LandingPageModule {
}
