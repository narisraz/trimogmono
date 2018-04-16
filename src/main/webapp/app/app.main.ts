import 'hammerjs';

import { ProdConfig } from './blocks/config/prod.config';
import { TrimogmonoAppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(TrimogmonoAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
