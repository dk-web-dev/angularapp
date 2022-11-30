import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import form module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import http module
import { HttpClientModule } from '@angular/common/http';
//import toasetr moduel
import { ToastrModule } from 'ngx-toastr';
//import routing module
import { AppRoutingModule } from './app-routing.module';

//import component
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { AlbumlistComponent } from './albumlist/albumlist.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';

//import custom pipes
import { DigitalcountPipe } from './pipes/digitalcount.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { AgeCalculatorPipe } from './pipes/age-calculator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomepageComponent,
    ContactUsComponent,
    ServiceComponent,
    PortfolioComponent,
    PipesComponent,
    DigitalcountPipe,
    SqrtPipe,
    AgeCalculatorPipe,
    ServicesComponent,
    EmpListComponent,
    EmpDetailComponent,
    AlbumsComponent,
    PageNotfoundComponent,
    AlbumlistComponent,
    UsersComponent,
    UserDetailComponent,
    FormsComponent,
    ReactiveFormComponent,
    DarkmodeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  //angualr material
    AppRoutingModule,  // routing added
    FormsModule,       // form added
    ReactiveFormsModule, // angular reeactive form approach
    HttpClientModule,   // http service added
    ToastrModule.forRoot(), // toaster added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
