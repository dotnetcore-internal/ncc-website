import {useTitle} from "@vueuse/core";
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

export {
    go,
    setTitle,
    lockBody,
    unlockBody
}