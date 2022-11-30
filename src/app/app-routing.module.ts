import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceComponent } from './service/service.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },

  { path: 'contact', component: ContactUsComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'album', component: AlbumsComponent },
  { path: 'album/:id', component: AlbumlistComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'forms', component: FormsComponent },
  {path:"reactiveForm",component:ReactiveFormComponent},
  { path: 'xyz', redirectTo: '/contact', pathMatch: 'full' }, // redirect to another component
  { path: '**', component: PageNotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
