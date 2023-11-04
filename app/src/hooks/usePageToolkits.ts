import {useTitle} from "@vueuse/core";
import {useCookies} from "@vueuse/integrations/useCookies";
import router from "@/router";

//region Route Jump

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "auto"});
};

const go = function (routeName: string) {
    scrollToTop();
    router.push({name: routeName, replace: false});
}

//endregion

//region Page Title

const setTitle = (newTitle: string) => {
    useTitle(`${newTitle} | .NET Core Community`);
}

//endregion

//region Lock and Unlock Body

const lockBody = () => {
    document.querySelector("body")?.setAttribute('style', 'overflow:hidden; height:100%;');
}

const unlockBody = () => {
    document.querySelector("body")?.setAttribute('style', 'overflow:unset; height:auto;');
}

//endregion

//region Cookie

const getCookieValue = <T = any>(key: string): T => {
    return useCookies().get<T>(key);
}

const getCookieValueWithDefaults = <T = any>(key: string, condition: (t: T) => boolean, factory: () => T): T => {
    const value = useCookies().get<T>(key);

    if (value === undefined || condition(value)) {
        const newValue = factory();
        setCookieValue(key, newValue);
        return newValue;
    }

    return value;
}
const setCookieValue = <T = any>(key: string, value: T) => {
    useCookies().set(key, value);
}

//endregion

//region Locale

const getLocaleFromCookie = (): string => {
    let ret = getCookieValueWithDefaults<string | unknown>('locale', (t) => t === undefined || t === null || t === '', () => 'en') as string;
    ret = ret ?? 'en';
    setLocaleToCookie(ret);
    return ret;
}

const setLocaleToCookie = (locale: string) => {
    setCookieValue('locale', locale);
}

//endregion

export {
    go,
    setTitle,
    lockBody,
    unlockBody,
    getCookieValue,
    setCookieValue,
    getCookieValueWithDefaults,
    getLocaleFromCookie,
    setLocaleToCookie
}