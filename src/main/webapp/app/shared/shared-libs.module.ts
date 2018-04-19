import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatIconRegistry, MatInputModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CookieModule } from 'ngx-cookie';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgJhipsterModule } from 'ng-jhipster';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      i18nEnabled: true,
      defaultI18nLang: 'en'
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    CookieModule.forRoot()
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    NgJhipsterModule,
    InfiniteScrollModule
  ],
  providers: [
    MatIconRegistry
  ]
})
export class TrimogmonoSharedLibsModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
