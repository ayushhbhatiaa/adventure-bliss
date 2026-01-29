import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { TripsComponent } from './components/trips/trips';
import { ServicesComponent } from './components/services/services';
import { GalleryComponent } from './components/gallery/gallery';
import { BlogComponent } from './components/blog/blog';
import { ContactComponent } from './components/contact/contact';
import { AdventureVaultComponent } from './components/adventure-vault/adventure-vault';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'services', component: ServicesComponent },
  // { path: 'gallery', component: GalleryComponent },
  { path: 'adventure-vault', component: AdventureVaultComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
