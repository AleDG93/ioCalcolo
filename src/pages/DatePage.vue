<script setup lang="ts">
import { useMeta } from 'vue-meta'
useMeta({
  title: 'Calcolatore della Differenza di Giorni tra Due Date',
  meta: [
    { name: 'description', content: 'Scopri il numero di giorni tra due date con il nostro calcolatore. Ideale per pianificazioni e organizzazioni.' },
    // other meta tags
  ],
  jsonld: {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "name": "Calcolatore della Differenza di Giorni tra Due Date",
    "description": "Un tool online per calcolare il numero di giorni tra due date specifiche, utile per la pianificazione e l'organizzazione.",
    "applicationCategory": "Utility",
    "operatingSystem": "Tutti i sistemi operativi"
  }
});

</script>
<template>
    <DatesDifference />
</template>