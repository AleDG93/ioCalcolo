<script setup lang="ts">
import {useMeta} from "vue-meta";

useMeta({
  title: 'Calcolo Percentuali',
  meta: [
    { name: 'description', content: 'Calcola percentuali e rapporti in modo rapido e preciso con il nostro strumento online. Ideale per matematica e analisi finanziaria.' },
    // other meta tags
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "http://schema.org",
        "@type": "WebApplication",
        "name": "Calcolo Percentuali",
        "description": "Uno strumento online per calcolare percentuali e rapporti, perfetto per studenti, insegnanti e professionisti nel campo finanziario.",
        "applicationCategory": "Educational",
        "operatingSystem": "Tutti i sistemi operativi",
      }
    }
  ]
});


</script>
<template>
  <ReversePercentage class="mb-3" />
    <Percentage class="mb-3" />
    <InversePercentage />
</template>