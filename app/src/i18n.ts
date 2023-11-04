import {nextTick} from 'vue';
import {createI18n} from 'vue-i18n';

export function setupI18n(options = {locale: 'en'}) {
    const i18n = createI18n(options)
    setI18nLanguage(i18n, options.locale)
    return i18n
}

// @ts-ignore
export function setI18nLanguage(i18n, locale) {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale
    } else {
        i18n.global.locale.value = locale
    }
    /**
     * NOTE:
     * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
     * The following is an example for axios.
     *
     * axios.defaults.headers.common['Accept-Language'] = locale
     */
    document.querySelector('html')?.setAttribute('lang', locale)
}

// @ts-ignore
export async function loadLocaleMessages(i18n, locale, path: string) {

    //get the language resource looks like: /locals/en/t_common.json
    const resourceName = path === '/' ? '_common' : path.replace(/\//g, '_');
    const queryPath = `/locales/${locale}/t_${resourceName}.json`;

    //load locale messages from remote
    await fetch(queryPath)
        .then(response => response.json())
        .then(messages => {
            // set locale and locale message
            if (isLocaleSupport(locale)) {
                i18n.global.mergeLocaleMessage(locale, messages);
            } else {
                appendNewSupportLocals(locale);
                i18n.global.setLocaleMessage(locale, messages);
            }
        })
        .catch(err => {
            console.log(err);
            locale = 'en';
        });

    //After the resource is loaded, the Path is written to the registration list
    registerPath(path, locale);

    return nextTick()
}

//region Support Locales

export const SUPPORT_LOCALES: string[] = [];

export function appendNewSupportLocals(locale: string) {
    if (!SUPPORT_LOCALES.includes(locale)) {
        SUPPORT_LOCALES.push(locale);
    }
}

export function isLocaleSupport(locale: string): boolean {
    return SUPPORT_LOCALES.includes(locale);
}

//endregion

//region Registered Paths

export const REGISTERED_PATHS: string[] = [];

export function registerPath(path: string, locale: string) {
    if (!REGISTERED_PATHS.includes(`${locale}#${path}`)) {
        REGISTERED_PATHS.push(`${locale}#${path}`);
    }
}

export function hasRegisteredPath(path: string, locale: string): boolean {
    return REGISTERED_PATHS.includes(`${locale}#${path}`);
}

//endregion

//region

function truncatePath(path: string): string | null {
    const regex = /^(\/news|\/announcements|\/weekly|\/projects|\/rules)/;

    const match = path.match(regex);
    if (match) {
        return match[0];
    }

    return null;
}

export function toFixedPath(path: string): string {
    const truncate = truncatePath(path);

    if (truncate) {
        return truncate;
    }

    return path;
}

//endregion