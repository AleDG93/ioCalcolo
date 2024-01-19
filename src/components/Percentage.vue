<script setup lang="ts">

import Card from 'primevue/card';
import { InputType } from './myInput';
const valueA = ref(0);
const valueB = ref(0);
const valueX = ref(0);

const calculateProportion = () => {
  if (valueA.value && valueB.value) {
    valueX.value = Math.floor(((valueB.value * valueA.value) / 100));
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
            Calcolo delle Parti Percentuali
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="percentage"/>
          </div>
        </div>
        </template>
        <template #subtitle>
            Calcola il valore di una porzione che rappresneta una data percentuale rispetto al totale.
        </template>
        <template #content>
          <ExapandableText title="Spiegazione">
            <template #content>
              Il calcolo percentuale è un modo per esprimere una parte di un intero in termini percentuali, che rappresenta una proporzione in centesimi rispetto al totale.
            </template>
          </ExapandableText>
          <ExapandableText title="Formula">
            <template #content>
              <p>La formula di calcolo percentuale è:</p>
              <p>
                Percentuale = <span class="math-formula">(Parte * Totale) / 100</span>
              </p>
            </template>
          </ExapandableText>
          <ExapandableText title="Esempio">
            <template #content>
              <p>Supponiamo di avere una classe di 50 studenti, e il 30 % di loro hanno ottenuto un voto A.</p>
              <p>La percentuale di studenti che hanno ottenuto un voto A rispetto al totale è:</p>              
              <p>
                Parte = <span class="math-formula">(30 * 50) / 100</span> = <strong>15</strong>
              </p>
            </template>
          </ExapandableText>
          <div class="grid mt-4">
            <div class="col-4  md:col-3 lg:col-1">          
              <MyInput label="Il" v-model="valueA" :type="InputType.NUMBER" size="xs" />    
              </div>    
            <div class="col-8  md:col-3 lg:col-2">
              <MyInput label="% di" v-model="valueB" :type="InputType.NUMBER" size="s" />    
            </div>
            <div class="col-2  md:col-3 lg:col-1">
              <div class="mt-2 text-center">è 
                <strong class="ml-2">{{  valueX }}</strong>
              </div>
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
  