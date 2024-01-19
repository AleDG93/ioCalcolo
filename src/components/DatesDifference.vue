<script setup lang="ts">

import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Calendar from "primevue/calendar";

const valueA = ref<Date>(new Date());
const valueB = ref<Date>(new Date());
const valueC = ref<Date>(new Date());
const valueX = ref(0);
const valueY = ref("");
const extraDays = ref(0);

watch([valueA, valueB], () => {
    // Calculate the time difference in milliseconds
    const timeDifference = valueA.value.getTime() - valueB.value.getTime();
    // Convert milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    valueX.value = Math.abs(daysDifference);
});
watch([valueC, extraDays], () => {
    // Clone the input date to avoid modifying it directly
    const resultDate = new Date(valueC.value);
    // Add the specified number of days
    resultDate.setDate(resultDate.getDate() + parseInt(extraDays.value.toString()));
    // Format the resulting date as dd/mm/yyyy
    const day = String(resultDate.getDate()).padStart(2, '0');
    const month = String(resultDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = resultDate.getFullYear();
    valueY.value =  `${day}/${month}/${year}`;
});
</script>
<template>
      <Card class="p-card p-shadow-5">
        <template #title>
        <div class="grid">
          <div class="col-12 lg:col-11 md:col-11">
            <!-- Content for medium (md) and small (sm) screens, and large (md) screens with a width of 9 columns -->
            Calcolo delle Date
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="date"/>
          </div>
        </div>
        </template>
        <template #subtitle>
            Calcola i giorni di differenza tra due date.
        </template>
        <template #content>
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-3">
                <label for="valueA" class="font-bold block mb-2">La distanza fra la data A:</label>
                <Calendar v-model="valueA" dateFormat="dd/mm/yy" placeholder="gg/mm/aaaa" />         
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <label for="valueA" class="font-bold block mb-2">e la data B:</label>
                <Calendar v-model="valueB" dateFormat="dd/mm/yy" placeholder="gg/mm/aaaa" />         
            </div>
            <div class="col-12 md:col-12 lg:col-6">
                <div style="display: grid;">
                    <span class="mb-3">è di:</span>
                    <span><strong>{{ valueX }}</strong> giorni</span>
                </div>
            </div>
        </div>
        <hr  class="mt-4 mb-4"/>
        <div class="grid">
            <div class="col-12 md:col-6 lg:col-3">
                <label for="valueA" class="font-bold block mb-2">Se aggiung +/- giorni pari a:</label>
                <!-- @vue-ignore -->              
                <InputText class="dim-reduction-plus" v-model="extraDays" type="number"/>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
                <label for="valueA" class="font-bold block mb-2">alla data:</label>
                <Calendar v-model="valueC" dateFormat="dd/mm/yy" placeholder="gg/mm/aaaa" />         
            </div>
            <div class="col-12 md:col-12 lg:col-6">
                <div style="display: grid;">
                    <span class="mb-3">si arriva al:</span>
                    <span><strong>{{ valueY || "..." }}</strong></span>
                </div>
            </div>
        </div>
    </template>

      </Card>
  </template>
  
  <style scoped>
  /* Add any additional styling if needed */
 
  </style>
  