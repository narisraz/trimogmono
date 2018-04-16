import {
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiLanguageHelper,
    TrimogmonoSharedLibsModule
} from './';
import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        TrimogmonoSharedLibsModule
    ],
    declarations: [
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        JhiLanguageHelper,
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        TrimogmonoSharedLibsModule,
        FindLanguageFromKeyPipe,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class TrimogmonoSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
