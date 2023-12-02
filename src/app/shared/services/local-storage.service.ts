import { Injectable } from '@angular/core'
import { Language } from '../constants/language'

const enum Keys {
    Language = 'LS_LANG'
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    setLanguage = (language: Language): void => this.set(Keys.Language, language)
    getLanguage = (): Language | null => this.get<Language>(Keys.Language)

    set = <T>(key: string, item: T): void => localStorage.setItem(key, JSON.stringify(item))
    get = <T>(key: string): T | null => {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item) as T
        }
        return null
    }
}