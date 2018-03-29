import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';
import { TestingComponent } from './testing/testing.component';
import { HoverFocusDirective } from './hoverfocus.directive';
import { FormTestingComponent } from './form-testing/form-testing.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DefaultPipe,
    LoginComponent,
    TestingComponent,
    HoverFocusDirective,
    FormTestingComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
