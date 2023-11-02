import {ref} from "vue";
import {defineStore} from "pinia";

export const useUiStore = defineStore("ui", () => {

    const isMobileMode = ref(false);

    const setMobileMode = (mobileMode: boolean) => isMobileMode.value = mobileMode;

    return {
        isMobileMode,
        setMobileMode
    };
});