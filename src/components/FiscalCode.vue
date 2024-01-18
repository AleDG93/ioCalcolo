<script setup lang="ts">
import {FiscalCodeCalculator} from "@/models/fiscalCode";
import { ComuniManager, ComuniSelectOptions } from "@/models/comuniManger"; // Adjust the path
import { debounce } from "lodash"; // Import lodash for debouncing
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
const comuniOptions = ref<ComuniSelectOptions[]>([]);
const resCodiceFiscale = ref("")

const manager = new ComuniManager();

comuniOptions.value = manager.getSelectOptionList();

// Uso delle classi
// Uso delle classi
const firstName = ref("");
const lastName = ref("");
const birthDate = ref();
const selectedComune = ref(null);
const genre = ref(null);
const genderOptions = [
        { label: 'M', value: 'M' },
        { label: 'F', value: 'F' }
      ];
const filteredComuni = ref<ComuniSelectOptions[]>(comuniOptions.value.slice(0, 20));
const calculateFiscalCode = () => {
  const selected = (selectedComune.value as any).value
  const comuneFinder = new FiscalCodeCalculator(firstName.value, lastName.value, birthDate.value, genre.value,  selected || "");
    resCodiceFiscale.value = comuneFinder.getFiscalCode();
}

const debouncedFilter = debounce(function() {
    // Debounced filter function to reduce the frequency of updates
    filterComuni();
  }, 300);
const filterComuni = () => {
  // Apply your custom filtering logic
  filteredComuni.value = comuniOptions.value.filter((comune: ComuniSelectOptions) =>
    comune.label.toLowerCase().includes((selectedComune.value || "").toLowerCase())
  );
}
</script>
<template>
    <Card class="p-card p-shadow-5">
      <template #title>
        <div class="grid">
          <div class="col-12 lg:col-11 md:col-11">
            <!-- Content for medium (md) and small (sm) screens, and large (md) screens with a width of 9 columns -->
            Calcolatore Codice Fiscale
          </div>
          <div class="col-12 lg:col-1 md:col-1">
            <!-- WidgetHeart component for medium (md) and small (sm) screens, and large (md) screens with a width of 3 columns -->
            <WidgetHeart widget="fiscalCode"/>
          </div>
        </div>

      </template>
      <template #subtitle>
        Inserisci le informazioni necessarie per calcolare il codice fiscale.
      </template>
      <template #content>
        <form @submit.prevent="calculateFiscalCode">
    <div class="flex flex-wrap gap-2 p-fluid">
      <div class="flex-auto">
        <label for="firstname" class="font-bold block mb-2">Nome</label>
        <InputText v-model="firstName" required />
      </div>
      <div class="flex-auto">
        <label for="lastname" class="font-bold block mb-2">Cognome</label>
        <InputText v-model="lastName" required />
      </div>
      <div class="flex-auto">
        <label for="birthDate" class="font-bold block mb-2">Data di nascita</label>
        <Calendar v-model="birthDate" dateFormat="dd/mm/yy" placeholder="gg/mm/aaaa" required />
      </div>
      <div class="flex-auto">
        <label for="birthPlace" class="font-bold block mb-2">Luogo di nascita</label>
        <AutoComplete
        v-model="selectedComune"
        :suggestions="filteredComuni"
        field="label"
        placeholder="Seleziona un comune"
        :virtualScroll="true"
        :virtualScrollerOptions="{
          numToleratedItems: 30,
          items:comuniOptions
        }"
        @input="debouncedFilter"
        required
        class="autocomplete-custom"
      />
      </div>
      <div class="flex-auto">
        <label for="genre" class="font-bold block mb-2">Genere</label>
        <Dropdown v-model="genre" :options="genderOptions" optionLabel="label" optionValue="value" required />
      </div>
    </div>
    <Button class="mt-2" type="submit" label="Calcola codice fiscale" />
  </form>
  <div class="flex flex-wrap mt-4">
      <div class="flex-auto">
        <label class="mb-2">Codice fiscale:</label>
        <h4>{{ resCodiceFiscale || "..." }}</h4>
      </div>
      </div>
      </template>
    </Card>
  </template>
<style scoped>
/* Add any custom styles for the component */
/* Ensure consistent height for InputText, Dropdown, and Calendar components */
.flex-auto .p-inputtext,
.flex-auto .p-dropdown,
.flex-auto .p-autocomplete,
.flex-auto .p-calendar {
  height: 2.5rem; /* Adjust the height as needed */
}

/* Optionally, you can style the dropdown items for consistent appearance */
.dropdown-custom .p-dropdown-item {
  line-height: 2rem; /* Adjust the line height as needed */
}

.p-autocomplete-custom .p-autocomplete-input .p-inputtext .p-component {
  
  line-height: 2rem; /* Adjust the line height as needed */
}

/* Optionally, you can style the calendar day container for consistent appearance */
.calendar-custom .p-datepicker td span {
  line-height: 2rem; /* Adjust the line height as needed */
}
</style>