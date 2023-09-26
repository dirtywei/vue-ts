<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive" :key="route.name" />
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive" :key="route.name" />
  </router-view>
</template>
<script setup lang="ts">
  import { omitPhone } from '@/utils/common'

  console.log(omitPhone(17322298119))
</script>

<style></style>
