import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { PageNotFoundComponent } from './pages/not-found/not-found.component'
import { RegisterComponent } from './pages/register/register.component'

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
