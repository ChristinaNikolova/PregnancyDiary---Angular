import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from './components/shared/shared.module';
import { CoreModule } from './components/core/core.module';
import { ArticleModule } from './components/article/article.module';
import { UserModule } from './components/user/user.module';
import { AdministrationModule } from './components/administration/administration.module';
import { DiaryModule } from './components/diary/diary.module';
import { BabyModule } from './components/baby/baby.module';
import { WeekModule } from './components/week/week.module';
import { MemoryModule } from './components/memory/memory.module';

import { ResponseHandlerInterceptor } from './core/interceptors/response-handler.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    SharedModule,
    CoreModule,
    ArticleModule,
    UserModule,
    AdministrationModule,
    DiaryModule,
    BabyModule,
    WeekModule,
    MemoryModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
