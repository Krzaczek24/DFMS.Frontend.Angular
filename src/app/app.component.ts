import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Language, languages } from './shared/language'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Dynamic Forms Management System'

    constructor(
        private translateService: TranslateService
    ) {
        this.translateService.addLangs(languages)
        this.translateService.setDefaultLang(languages[0])

        const browserLang = this.translateService.getBrowserLang()
        if (browserLang && languages.includes(browserLang)) {
            this.translateService.use(browserLang)
        }
    }

    ngOnInit(): void {

    }
}