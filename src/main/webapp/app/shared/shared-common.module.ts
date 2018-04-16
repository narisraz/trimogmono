import {
    FindLanguageFromKeyPipe,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiLanguageHelper,
    TrimogmonoSharedLibsModule
} from './';
import { LOCALE_ID, NgModule } from '@angular/core';

import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

@NgModule({
    imports: [
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
