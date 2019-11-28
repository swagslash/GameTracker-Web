import {NgModule} from '@angular/core';
import {LocalStorageService, RequestHelperService} from './services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    LocalStorageService,
    RequestHelperService,
  ],
})
export class SharedModule {
}
