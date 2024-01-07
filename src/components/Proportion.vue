<!-- src/components/ProportionCalculator.vue -->

<script setup lang="ts">

import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';

const valueA = ref(0);
const valueB = ref(0);
const valueC = ref(0);
const valueX = ref(0);
const result = ref("");

const calculateProportion = () => {
  if (valueA.value && valueB.value && valueC.value) {
    result.value = ((valueA.value * valueC.value) / valueB.value).toFixed(2);
  } else if (valueA && valueB.value && valueC.value && valueX.value) {
    result.value = ((valueB.value * valueX.value) / valueA.value).toFixed(2);
  } else {
    result.value = "";
  }
};
</script><template>
    <div class="p-d-flex p-jc-center p-ai-center p-h-100">
      <Card class="p-card p-shadow-5">
        <template #title>
            Arithmetic Proportions Calculator

            
        </template>
        <template #subtitle>
            
            Enter three values and leave the fourth empty to calculate the unknown proportion (X).
        </template>
        <template #content>

  
        <!-- Input Fields -->
        <div class="p-grid p-justify-center p-mb-3">
          <div class="p-col">
            <label for="valueA">Value A:</label>
            <InputNumber v-model="valueA" id="valueA" class="p-inputtext" />
          </div>
          <div class="p-col">
            <label for="valueB">Value B:</label>
            <InputNumber v-model="valueB" id="valueB" class="p-inputtext" />
          </div>
          <div class="p-col">
            <label for="valueC">Value C:</label>
            <InputNumber v-model="valueC" id="valueC" class="p-inputtext" />
          </div>
          <div class="p-col">
            <label for="valueX">Unknown (X):</label>
            <InputNumber v-model="valueX" id="valueX" class="p-inputtext" />
          </div>
        </div>
  
        <!-- Calculate Button -->
        <div class="p-text-center p-mb-3">
          <Button label="Calculate" @click="calculateProportion" />
        </div>
  
        <!-- Result -->
        <div class="p-text-center p-mb-3">
          <div v-if="result !== null">
            <p class="p-text-bold">The unknown (X) is: {{ result }}</p>
          </div>
        </div>
  
        <!-- Explanation Card -->
        <Card>
          <h4 class="p-mb-3">Explanation:</h4>
          <p>
            In arithmetic proportions, the product of the means (ad) is equal to the product of the extremes (bc).
            This calculator helps you find the unknown proportion (X) based on three known values.
          </p>
        </Card>
    </template>

      </Card>
    </div>
  </template>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>
  