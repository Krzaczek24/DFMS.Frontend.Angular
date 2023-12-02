import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { languages } from './shared/constants/language'
import { LocalStorageService } from './shared/services/local-storage.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Dynamic Forms Management System'

    constructor(
        private translateService: TranslateService,
        private localStorage: LocalStorageService
    ) {
        this.translateService.addLangs(languages)
        this.translateService.setDefaultLang(languages[0])

        const savedLanguage = this.localStorage.getLanguage()
        if (savedLanguage) {
            this.translateService.use(savedLanguage)
        }
        else {
            const browserLang = this.translateService.getBrowserLang()
            if (browserLang && languages.includes(browserLang)) {
                this.translateService.use(browserLang)
            }
        }
    }

    ngOnInit(): void {

    }
}