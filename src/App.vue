<script setup lang="ts">
import {useMeta} from 'vue-meta'
useMeta({
      title: 'Home'
    })
</script>

<template>
     <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | ioCalcolo` : `ioCalcolo` }}</template>
  </metainfo>
    <div class="mx-4 md:mt-4">
        <Header />
            <router-view></router-view>
    </div>
</template>