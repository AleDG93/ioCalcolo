<script setup lang="ts">
import {FiscalCodeCalculator} from "@/models/fiscalCode";
import { ComuniManager, ComuniSelectOptions } from "@/models/comuniManger"; // Adjust the path

import { debounce } from "lodash"; // Import lodash for debouncing

import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Calendar from "primevue/calendar";
import Dropdown, { DropdownFilterEvent } from "primevue/dropdown";
import Button from "primevue/button";
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
const filterText = ref("");
const filteredComuni = ref<ComuniSelectOptions[]>(comuniOptions.value.slice(0, 20));
const calculateFiscalCode = () => {
  const comuneFinder = new FiscalCodeCalculator(firstName.value, lastName.value, birthDate.value, genre.value,  selectedComune.value || "");
    resCodiceFiscale.value = comuneFinder.getFiscalCode();
}

const updateFilterText = (inp: DropdownFilterEvent) => {

  filterText.value = inp.value;
  selectedComune.value = inp.value;
  debouncedFilter(); // Trigger the debounced filter function
}
const debouncedFilter = debounce(function() {
    // Debounced filter function to reduce the frequency of updates
    filterComuni();
  }, 300);
const filterComuni = () => {
  // Apply your custom filtering logic
  filteredComuni.value = comuniOptions.value.filter((comune: ComuniSelectOptions) =>
    comune.label.toLowerCase().includes(filterText.value.toLowerCase())
  );
}
</script>
<template>
    <Card class="p-card p-shadow-5">
      <template #title>
        Fiscal Code Calculator
        <WidgetHeart widget="fiscalCode"/>
      </template>
      <template #subtitle>
        Please enter the following details to calculate the fiscal code.
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
        <Dropdown
          v-model="selectedComune"
          :options="filteredComuni"
          optionLabel="label"
          optionValue="value"
          filter
          :virtualScroll="true"
          :virtualItemSize="30"
          @filter="updateFilterText"
          required
          class="dropdown-custom" 
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
        <h4>{{ resCodiceFiscale }}</h4>
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
.flex-auto .p-calendar {
  height: 2.5rem; /* Adjust the height as needed */
}

/* Optionally, you can style the dropdown items for consistent appearance */
.dropdown-custom .p-dropdown-item {
  line-height: 2rem; /* Adjust the line height as needed */
}

/* Optionally, you can style the calendar day container for consistent appearance */
.calendar-custom .p-datepicker td span {
  line-height: 2rem; /* Adjust the line height as needed */
}
</style>