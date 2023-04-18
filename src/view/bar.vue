<template>
  <div>
    <Starport
      port="1"
      class="test"
    >
      <div class="w-[300px] h-[300px] rounded-full absolute bottom-0 right-0 duration-200">
        <img
          :src="img1"
          class="w-full h-full object-cover"
        >
      </div>
    </Starport>
    <RouterLink to="/foo">
      go
    </RouterLink>
  </div>
</template>

<script lang='ts' setup>
import { Starport } from 'vue-starport'
import { img1 } from '@/config'
</script>

<style scoped lang='scss'>
[data-starport-craft] {
  background: #0805;
}
[data-starport-proxy]:not([data-starport-landed]) {
  background: #8005;
}
.test{
  height:300px;position: absolute;bottom: 10px;width: 300px;right: 10px;
}
</style>
