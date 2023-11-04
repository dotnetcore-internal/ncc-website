import {hasRegisteredPath, loadLocaleMessages, setI18nLanguage, toFixedPath} from "@/i18n";

const toSetOrLoadLanguage = async (i18n: unknown, locale: string, path: string) => {

    const fixedPath = toFixedPath(path);

    //to check whether the resource is registered
    //if registered, the resource has been loaded into the i18n manager
    //and return.
    if (!hasRegisteredPath(fixedPath, locale)) {

        // load locale messages
        await loadLocaleMessages(i18n, locale, fixedPath);
    }

    //force to load common language resource
    if (!hasRegisteredPath('/', locale)) {
        // load locale messages
        await loadLocaleMessages(i18n, locale, '/');
    }

    // set i18n language
    setI18nLanguage(i18n, locale);
}

export {
    toSetOrLoadLanguage
};