<template>
  <div
    class="w-[99vw] overflow-hidden h-[3000px]"
    v-scroll
  >
    222222222222
  </div>
</template>

<script lang='ts' setup>
import { Directive } from 'vue'

const vScroll:Directive = {
  mounted (el, bind) {
    const ele = el as Element
    ele.addEventListener('mousewheel', (e) => {
      e.preventDefault()
      e.stopPropagation()
    })
  }
}

</script>

<style scoped lang='scss'>

</style>
