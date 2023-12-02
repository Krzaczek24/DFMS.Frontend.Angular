import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageComponent } from './components/language/language.component'

@NgModule({
    declarations: [AppComponent, LanguageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/locale/translation.', '.json'),
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        HttpClient,
        TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }