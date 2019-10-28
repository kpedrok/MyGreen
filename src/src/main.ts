/*
=========================================================
* mygreen Design System Angular - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/mygreen-design-system-angular
* Copyright 2019 "" (https://www.creative-tim.com)
* Licensed under MIT

* Coded by ""

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
