<script setup lang="ts">
import { useMeta } from 'vue-meta'
useMeta({
  title: 'Calcolo del Codice Fiscale Italiano',
  meta: [
    { name: 'description', content: 'Calcola facilmente il tuo codice fiscale italiano con il nostro strumento online. Inserisci i tuoi dati personali e ottieni il codice in pochi secondi.' },
    // other meta tags
  ],
  script: [
    {
      type: 'application/ld+json',

  jsonld: {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "name": "Calcolo del Codice Fiscale Italiano",
    "description": "Un’applicazione web per calcolare rapidamente il codice fiscale italiano basato sui dati personali.",
    "applicationCategory": "Utility",
    "operatingSystem": "Tutti i sistemi operativi",
  }}
]
});

</script>
<template>
    <FiscalCode />
</template>