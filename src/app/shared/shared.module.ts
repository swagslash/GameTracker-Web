import {NgModule} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {RequestHelperService} from './request-helper.service';
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
