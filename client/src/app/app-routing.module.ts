import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: 'articles', loadChildren: './components/article/article.module#ArticleModule', canActivate: [AuthGuard] },
  { path: 'users', loadChildren: './components/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'weeks', loadChildren: './components/week/week.module#WeekModule', canActivate: [AuthGuard] },
  { path: 'diaries', loadChildren: './components/diary/diary.module#DiaryModule', canActivate: [AuthGuard] },
  { path: 'baby', loadChildren: './components/baby/baby.module#BabyModule', canActivate: [AuthGuard] },
  { path: 'memories', loadChildren: './components/memory/memory.module#MemoryModule', canActivate: [AuthGuard] },
  { path: 'administration', loadChildren: './components/administration/administration.module#AdministrationModule', canActivate: [AdminGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
