import { Component, Input, OnInit } from '@angular/core';

import { CSRFService } from '../auth/csrf.service';
import { SocialService } from './social.service';

@Component({
    selector: 'jhi-social',
    templateUrl: './social.component.html'
})
export class JhiSocialComponent implements OnInit {
    @Input() provider: string;
    icon: string;
    label: string;
    providerSetting: string;
    providerURL: string;
    csrf: string;

    constructor(
        private csrfService: CSRFService,
        private socialService: SocialService
    ) {}

    ngOnInit() {
        this.label = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
        this.providerSetting = this.socialService.getProviderSetting(this.provider);
        this.providerURL = this.socialService.getProviderURL(this.provider);
        this.csrf = this.csrfService.getCSRF();
        this.icon = this.socialService.getIconSetting(this.provider);
    }
}
