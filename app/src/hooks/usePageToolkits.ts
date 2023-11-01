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

export {
    go,
    setTitle
}