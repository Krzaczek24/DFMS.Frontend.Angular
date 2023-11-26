
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { routes } from './app.routes'

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
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
export class AppModule {

}