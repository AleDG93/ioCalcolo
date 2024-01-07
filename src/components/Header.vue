<script setup lang="ts">
import Menubar  from 'primevue/menubar';



const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
    hasSubmenu: false
  },
  {
    label: 'Finance',
    icon: 'pi pi-money-bill',
    route: '/finance',
    hasSubmenu: false
  },
  {
    label: 'Math',
    icon: 'pi pi-search',
    hasSubmenu: true,
        items: [
            {
                label: 'Proportion',
                icon: 'pi pi-bolt',
                route: "/math/proportion"
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                route: "/finance"
            }
        ]
    },
  // Add more menu items as needed
]);
</script>
<template>
    <div class="header">
        <Menubar :model="items" class="custom-menubar">
    <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
    </template>
</Menubar>
    </div>
</template>
<style scoped>

.p-menubar {

  border-radius: 30px; /* Adjust the border-radius to control the roundness of corners */
  background-color: white; /* Set the background color to white */
  margin: 20px 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add an elegant box shadow */
}

</style>