<script setup lang="ts">

import { useWidgetStore } from '@/stores/widget';
import ToggleButton from 'primevue/togglebutton';

const widgets = useWidgetStore()

const props = defineProps<{ widget: string }>();

const selected = ref(false);
const handleToggle = () => {
    if (selected.value) {
        //Heart selected
    widgets.append(props.widget);
} else {
    //Heart deselected
    widgets.remove(props.widget)
    }
};

onMounted(() => {
    if(widgets.get().includes(props.widget)){
        selected.value = true;
    };
})
</script>
<template>
    <ToggleButton v-model="selected" onLabel="" offLabel=""
            onIcon="pi pi-heart-fill" offIcon="pi pi-heart" class="w-3rem ml-3 heart-icon" @click="handleToggle"/>
</template>