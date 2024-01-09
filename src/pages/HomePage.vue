
<script setup lang="ts">
// Import the component map
import componentMap from '@/composable/componentMapper';
import { useWidgetStore } from '@/stores/widget';
const widgets = useWidgetStore();
function getComponent(name: string) {
      // Return the component corresponding to the string
      return componentMap[name];
};
</script>
<template>
    <div v-if="widgets.get().length">
      <!-- Iterate over the array and render components dynamically -->
      <component v-for="name in widgets.get()" :is="getComponent(name)" :key="name" class="mb-3"></component>
    </div>
    <div v-else>
        Add widgets to visualize them in the homepage
    </div>
  </template>
  
  