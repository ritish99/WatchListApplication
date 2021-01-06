import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlatformRef } from '@angular/core'; 
 
// Create Browser Platform
const platformRef: PlatformRef = platformBrowserDynamic();
 
// Bootstrap Application
platformRef.bootstrapModule(AppModule);