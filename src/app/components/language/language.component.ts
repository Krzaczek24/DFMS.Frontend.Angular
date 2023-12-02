import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { Language } from '../../shared/language'

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrl: './language.component.scss'
})
export class LanguageComponent {
    constructor(
        private translateService: TranslateService
    ) {

    }

    get language() {
        return this.translateService.currentLang
    }

    setLanguage(language: Language) {
        this.translateService.use(language)
    }
}
