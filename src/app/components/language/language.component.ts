import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Language } from '../../shared/constants/language'
import { LocalStorageService } from '../../shared/services/local-storage.service'

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrl: './language.component.scss'
})
export class LanguageComponent {
    constructor(
        private translateService: TranslateService,
        private localStorage: LocalStorageService
    ) {

    }

    get language() {
        return this.translateService.currentLang
    }

    setLanguage(language: Language) {
        this.translateService.use(language)
        this.localStorage.setLanguage(language)
    }
}
