import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module'
import { RouterOutlet } from '@angular/router'

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        RouterOutlet,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/locale/', '.json'),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }