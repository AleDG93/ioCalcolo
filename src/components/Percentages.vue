<script setup lang="ts">

import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

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
            Calcolo delle Percentuali
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="percentages"/>
          </div>
        </div>
        </template>
        <template #subtitle>
            Calcola la percentuale di una porzione rispetto al totale.
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
                Percentuale = <span class="math-formula">(Parte / Totale) * 100</span>
              </p>
            </template>
          </ExapandableText>
          <ExapandableText title="Esempio">
            <template #content>
              <p>Supponiamo di avere una classe di 30 studenti, e 15 di loro hanno ottenuto un voto A.</p>
              <p>La percentuale di studenti che hanno ottenuto un voto A rispetto al totale è:</p>              
              <p>
                Percentuale di A = <strong>50 %</strong>
              </p>
            </template>
          </ExapandableText>
          <div class="grid mt-4">
            <div class="col-2 lg:col-1">
              <div class="mt-2 text-center">Il</div>
            </div>
            <div class="col-2 lg:col-2 dim-reduction-plus">              
              <InputText class="dim-reduction-plus" v-model="valueA" type="number"/>
              </div>    
            <div class="col-3 lg:col-1">
              <div class="mt-2 text-center">% di</div>
            </div>
            <div class="col-3 lg:col-2 dim-reduction">
               <InputText class="dim-reduction" v-model="valueB" type="number"/>
            </div>
            <div class="col-3 lg:col-1">
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
  