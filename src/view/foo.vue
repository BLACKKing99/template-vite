<template>
  <div>
    <Starport port="1">
      <div
        class="w-[400px] h-[400px] object-cover rounded-full"
      >
        <img
          :src="img2"
          class="w-full h-full rounded-full"
        >
      </div>
    </Starport>
    <RouterLink to="/bar">
      go
    </RouterLink>
  </div>
</template>

<script lang='ts' setup>
import { Starport } from 'vue-starport'
import { img2 } from '@/config'
</script>

<style scoped lang='scss'>
[data-starport-craft] {
  background: #0805;
}
[data-starport-proxy]:not([data-starport-landed]) {
  background: #8005;
}
</style>
