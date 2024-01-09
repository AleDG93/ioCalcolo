import { defineStore } from 'pinia';

export const useWidgetStore = defineStore('preferredWidgets', {
    state: () => {
        // Initialize state with data from LocalStorage or default to an empty array
        const savedWidgets = localStorage.getItem('preferredWidgets');
        return { widgets: savedWidgets ? JSON.parse(savedWidgets) : [] as Array<string> }
    },
    actions: {
        saveToLocalStorage() {
            localStorage.setItem('preferredWidgets', JSON.stringify(this.widgets));
        },
        append(widget: string) {
            this.widgets.push(widget);
            this.saveToLocalStorage();
        },
        clear() {
            this.widgets.splice(0, this.widgets.length);
            this.saveToLocalStorage();
        },
        get(): string[] {
            return this.widgets;
        },
        remove(input: string): void {
            const index = this.widgets.indexOf(input);
            if (index !== -1) {
                this.widgets.splice(index, 1);
                this.saveToLocalStorage();
            }
        }
    },
});
