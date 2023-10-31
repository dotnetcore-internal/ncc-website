import {nextTick} from "vue";
import router from "@/router";

const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "auto"});
};

const go = function (routeName: string) {
    scrollToTop();
    nextTick(() => {
        router.push({name: routeName, replace: true});
    });
}

export {
    go
}