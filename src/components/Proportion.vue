<script setup lang="ts">

import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';

const valueA = ref(0);
const valueB = ref(100);
const valueC = ref(0);
const valueX = ref(0);

const calculateProportion = () => {
  if (valueA.value && valueC.value) {
    valueX.value = Math.floor(((valueA.value * valueC.value) / valueB.value));
  }
};

watch([valueA, valueC], calculateProportion)
</script>
<template>
      <Card class="p-card p-shadow-5">
        <template #title>
            Arithmetic Proportions Calculator
            <WidgetHeart widget="proportion"/>
        </template>
        <template #subtitle>
            Enter three values and leave the fourth empty to calculate the unknown proportion (X).
        </template>
        <template #content>
          <!-- <h4 class="p-mb-3">Explanation:</h4>
          <p>
            In arithmetic proportions, the product of the means (ad) is equal to the product of the extremes (bc).
            This calculator helps you find the unknown proportion (X) based on three known values.
          </p> -->
          <ExapandableText title="Spiegazione">
            <template #content>
            In arithmetic proportions, the product of the means (ad) is equal to the product of the extremes (bc).
            This calculator helps you find the unknown proportion (X) based on three known values.
            </template>
          </ExapandableText>
          <ExapandableText title="Esempio">
            <template #content>
              Esempio: se 4 é il 40% del totale, questo totale é 10.
            </template>
          </ExapandableText>
          <div class="flex flex-wrap gap-2 p-fluid mt-4">
            <div class="flex-auto">
                <label for="integeronly" class="font-bold block mb-2"> If value A is </label>
                <InputNumber v-model="valueA" @input="calculateProportion"/>
            </div>
            <div class="flex-auto">
                <label for="withoutgrouping" class="font-bold block mb-2"> out of </label>
                <InputNumber v-model="valueB"  disabled/>
            </div>
            <div class="flex-auto">
                <label for="minmaxfraction" class="font-bold block mb-2"> And value B is </label>
                <InputNumber v-model="valueC" :maxFractionDigits="2" @input="calculateProportion"/>
            </div>
            <div class="flex-auto">
                <label for="minmax" class="font-bold block mb-2"> it results in: </label>
                <InputNumber v-model="valueX"  disabled/>
            </div>
            
        </div>
    </template>

      </Card>
  </template>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  