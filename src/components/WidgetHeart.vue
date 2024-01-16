<script setup lang="ts">

import { useWidgetStore } from '@/stores/widget';
import ToggleButton from 'primevue/togglebutton';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

const widgets = useWidgetStore()

const props = defineProps<{ widget: string }>();
const toast = useToast();
const showInfo = (content: string) => {
    toast.add({ severity: 'info', summary: 'Informazione', detail: content, life: 3000 });
};
const showSuccess = (content: string) => {
    toast.add({ severity: 'success', summary: 'Complimenti', detail: content, life: 3000 });
};
const selected = ref(false);
const handleToggle = () => {
    if (selected.value) {
        //Heart selected
    widgets.append(props.widget);
    showSuccess("Widget aggiunto alla Homepage")
} else {
    //Heart deselected
    widgets.remove(props.widget)
    showInfo("Widget rimosso dalla Homepage")
    }
};

onMounted(() => {
    if(widgets.get().includes(props.widget)){
        selected.value = true;
    };
})
</script>
<template>
    <Toast />
    <ToggleButton v-model="selected" onLabel="" offLabel=""
            onIcon="pi pi-heart-fill" offIcon="pi pi-heart" class="w-3rem heart-icon" @click="handleToggle"/>
</template>