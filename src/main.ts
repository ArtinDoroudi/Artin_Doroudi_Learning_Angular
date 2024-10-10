import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },  // Default route redirects to posts list
  { path: 'test', redirectTo: '/posts', pathMatch: 'full' },  // for test
];
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
