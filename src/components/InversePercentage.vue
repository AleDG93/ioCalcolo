<script setup lang="ts">

import Card from 'primevue/card';
import { InputType } from './myInput';

const valueA = ref(0);
const valueB = ref(0);
const valueX = ref(0);

const calculateProportion = () => {
  if (valueA.value && valueB.value) {
    valueX.value = Math.floor((valueA.value / (1 - (valueB.value /100))));
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
            Calcolo Inverso delle Percentuali
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="inversePercentage"/>
          </div>
        </div>
        </template>
        <template #subtitle>
            Calcola il totale a partire da una porzione di esso, data la percentuale di riduzione.
        </template>
        <template #content>
          <ExapandableText title="Spiegazione">
            <template #content>
              Il calcolo inverso della percentuale è per risalire al totale data una porzione del totale e la percentuale mancante da esso.
            </template>
          </ExapandableText>
          <ExapandableText title="Formula">
            <template #content>
              <p>La formula di calcolo percentuale è:</p>
              <p>
                Totale = <span class="math-formula">Parte / (1 - Percentuale)</span>
              </p>
            </template>
          </ExapandableText>
          <ExapandableText title="Esempio">
            <template #content>
              <p>Supponiamo di aver acquistato un vestito a 75 €, grazie ad uno sconto del 40%.</p>
              <p>Il prezzo iniziale del vestito prima che venisse applicato lo sconto era:</p>              
              <p>
                Totale = <span class="math-formula">75 € / (1 - 0.40)</span> = <strong>125 €</strong>
              </p>
            </template>
          </ExapandableText>
          <div class="grid mt-4">
            <div class="col-12 md:col-6 lg:col-2">              
              <MyInput label="Se ottengo" v-model="valueA" :type="InputType.NUMBER" size="s" />    
              </div>    
            <div class="col-12 md:col-6 lg:col-3">
              <MyInput label="una volta ridotto del" v-model="valueB" :type="InputType.NUMBER" size="s" />    
            </div>
            <div class="col-12 md:col-4 lg:col-3">
              <div class="mt-2"> % , il totale è: 
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
  