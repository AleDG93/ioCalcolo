<script setup lang="ts">
const expanded = ref(false);
defineProps<{ title: string }>();
const toggleExpanded = () => {
  expanded.value = !expanded.value;
};
</script>
<template>
  <div class="my-2">
    <div class="header" @click="toggleExpanded">
      <i class="pi pi-chevron-right mr-2" :class="{ 'pi-chevron-down': expanded }"></i>
      <span class="font-bold">{{ title }}</span>
    </div>
    <div v-if="expanded" class="mt-2">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<style scoped>
.header {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.header i {
  transition: transform 0.3s;
}

.expanded i {
  transform: rotate(90deg);
}

</style>