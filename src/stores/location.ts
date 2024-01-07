import { defineStore } from 'pinia';
import { RouteLocationRaw } from 'vue-router';

export interface LocationPath {
    icon?: string,
    name?: string,
    to: RouteLocationRaw
}

export const useLocationStore = defineStore('location', {
    state: () => {
        return { paths: [] as Array<LocationPath> }
    },
    actions: {
        append(path: LocationPath) {
            this.paths.push(path);
        },
        clear() {
            this.paths.splice(0, this.paths.length);
        },
    },
})