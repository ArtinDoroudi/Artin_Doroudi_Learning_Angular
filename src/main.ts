import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PostListComponent } from './app/post-list/post-list.component';
import { ModifyPostListItemComponent } from './app/modify-post-list-item/modify-post-list-item.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },  // Default route to post list
  { path: 'posts', component: PostListComponent },
  { path: 'modify-post', component: ModifyPostListItemComponent },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for 404 page
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
