<script setup lang="ts">

import Card from 'primevue/card';
import { InputType } from './myInput';

const valueA = ref(0);
const valueB = ref(0);
const valueX = ref(0);

const calculateProportion = () => {
  if (valueA.value && valueB.value) {
    valueX.value = Math.floor(((valueA.value / valueB.value ) * 100));
  }
};

watch([valueA, valueB], calculateProportion)
</script>
<template>
      <Card class="p-card p-shadow-5">
        <template #title>
        <div class="grid">
          <div class="col-12 lg:col-11 md:col-11">
            <!-- Content for medium (md) and small (sm) screens, and large (md) screens with a width of 9 columns -->
            Calcolo delle Percentuali
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="reversePercentage"/>
          </div>
        </div>
        </template>
        <template #subtitle>
            Calcola il valore in percentuale di una porzione rispetto al totale.
        </template>
        <template #content>
          <ExapandableText title="Spiegazione">
            <template #content>
              Il calcolo percentuale è un modo per esprimere una parte di un intero in termini percentuali, che rappresenta una proporzione in centesimi rispetto al totale.
            </template>
          </ExapandableText>
          <ExapandableText title="Formula">
            <template #content>
              <p>La formula del valore percentuale è:</p>
              <p>
                Percentuale = <span class="math-formula">(Parte / Totale) * 100</span>
              </p>
            </template>
          </ExapandableText>
          <ExapandableText title="Esempio">
            <template #content>
              <p>Supponiamo di avere una classe di 80 studenti, e 20 di loro hanno ottenuto un voto A.</p>
              <p>La percentuale di studenti che hanno ottenuto un voto A rispetto al totale è:</p>              
              <p>
                Percentuale =  <span class="math-formula">(20 / 80) * 100</span> = <strong>25 %</strong>
              </p>
            </template>
          </ExapandableText>
          <div class="grid mt-4">
            <div class="col-6 md:col-1 lg:col-1">
              <MyInput v-model="valueA" :type="InputType.NUMBER" size="s" />    
              </div>    
            <div class="col-6 md:col-4 lg:col-2 ">
              <div class="mt-2">corrisponde al</div>
            </div>
            <div class="col-4 md:col-1 lg:col-1">
              <div class="mt-2"> 
                <strong class="ml-2">{{  valueX || "..." }} %</strong>
              </div>
            </div>
            <div class="col-8 md:col-3 lg:col-2">
               <MyInput label="di" v-model="valueB" :type="InputType.NUMBER" size="s" />    
            </div>
        </div>
    </template>

      </Card>
  </template>
  
  <style scoped>
  /* Add any additional styling if needed */
  .math-formula {
  font-style: italic;
  font-size: 18px;
}

.dim-reduction {
  width: 6rem;
}

.dim-reduction-plus {
  width: 4rem;
}
  </style>
  