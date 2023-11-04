import {createApp} from "vue";
import {createPinia} from "pinia";
import {getLocaleFromCookie} from "@/hooks/usePageToolkits";
import {hasRegisteredPath, loadLocaleMessages, setI18nLanguage, setupI18n, toFixedPath} from '@/i18n';

import App from "./App.vue";
import router from "./router";

import "./assets/app.css";
import './main.css'
import 'animate.css'

const i18n = setupI18n();

router.beforeEach(async (to, from, next) => {
    const locale = getLocaleFromCookie();

    const path = toFixedPath(to.path);

    //to check whether the resource is registered
    //if registered, the resource has been loaded into the i18n manager
    //and return.
    if (!hasRegisteredPath(path, locale)) {

        // load locale messages
        await loadLocaleMessages(i18n, locale, path);
    }

    //force to load common language resource
    if (!hasRegisteredPath('/', locale)) {
        // load locale messages
        await loadLocaleMessages(i18n, locale, '/');
    }

    // set i18n language
    setI18nLanguage(i18n, locale);

    return next();
});

const app = createApp(App);

app.use(createPinia());
app.use(i18n);
app.provide('$i18n', i18n);
app.use(router);

app.mount("#App");
